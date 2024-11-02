import { computed, signal } from '@angular/core';
import { Utils } from '../../../common/utils';
import { AudioService } from '../../services/audio.service';
import { EntitiesService } from '../../services/entity/entities.service';
import { AdventureService } from '../../services/fact/adventure.service';
import { CampaignEvent, Data as EventData } from '../../services/fact/campaign-event';
import { CampaignService } from '../../services/fact/campaign.service';
import { CampaignNpcService } from '../../services/fact/campaignNpc.service';
import { CharacterService } from '../../services/fact/character.service';
import { EventService } from '../../services/fact/event.service';
import { Data as JournalData, JournalEntry } from '../../services/fact/journal-entry';
import { JournalService } from '../../services/fact/journal.service';
import { CampaignNPC, Data as NpcData } from '../entities/npc';
import { DateTime } from '../entities/values/date-time';
import { Adventure, Data as AdventureData } from './adventure';
import { Fact } from './fact';
import {
  Data as InitiativData,
  InitiativeQueue,
  Participant,
  ParticipantState,
  ParticipantType,
} from './factoids/initiative-queue';
import { MapInfo, Data as MapInfoData } from './factoids/map-info';
import { TokenInfo } from './factoids/token-info';

const CURRENT_EVENTS_BEFORE = 2;
const CURRENT_EVENTS_AFTER = 5;

export interface Data {
  image?: string;
  time?: string;
  date?: string;
  screenImage?: string;
  round?: number;
  adventure?: string;
  map?: MapInfoData;
  initative?: InitiativData;
}

export class Campaign extends Fact<Data, CampaignService> {
  private readonly adventureService: AdventureService;
  private readonly characterService: CharacterService;
  private readonly journalService: JournalService;
  private readonly eventService: EventService;
  private readonly campaignNpcService: CampaignNpcService;

  npcs = computed(() => this.campaignNpcService.facts());
  characters = computed(() => this.characterService.facts());
  adventures = computed(() => this.adventureService.facts());
  journals = computed(() => this.recomputeJournalEntries(this.journalService.facts()));
  events = computed(() => this.eventService.facts());
  currentEvents = computed(() => this.computeCurrentEvents(this.events()));
  locations = computed(() => this.map().name().split('/'));

  adventure = computed(() => (this.adventureName() ? this.adventureService.get(this.adventureName()) : undefined));
  image = signal<string>('');
  dateTime = signal<DateTime>(DateTime.EMPTY);
  screenImage = signal<string>('');
  round = signal<number>(0);
  map = signal<MapInfo>(new MapInfo(this.entitiesService, {}), { equal: MapInfo.isEqual });
  adventureName = signal<string>('');
  npcsByName = computed(() => new Map(this.npcs().map((n) => [n.name, n])));
  initiatives = signal<InitiativeQueue | undefined>(undefined, { equal: (a, b) => InitiativeQueue.isEqual(a, b) });
  participants = computed(
    () =>
      this.initiatives()
        ?.participants()
        .filter((p) => p.state() === ParticipantState.active),
  );
  currentParticipant = computed(() => Utils.selectElement(this.participants(), 0));
  nextParticipant = computed(() => Utils.selectElement(this.participants(), 1));

  constructor(
    service: CampaignService,
    private readonly audioService: AudioService,
    private readonly entitiesService: EntitiesService,
    public readonly name: string,
    data: Data,
  ) {
    super(service);

    this.adventureService = this.service.createAdventureService(this);
    this.characterService = this.service.createCharacterService(this);
    this.journalService = this.service.createJournalService(this);
    this.eventService = this.service.createEventService(this);
    this.campaignNpcService = this.service.createNpcService(this);

    this.update(data);
  }

  override buildDocumentId(): string {
    return this.name;
  }

  override update(data: Data) {
    this.image.set(data.image || '');
    this.dateTime.set(DateTime.fromStrings(data.date || '', data.time || ''));
    this.screenImage.set(data.screenImage || '');
    this.round.set(data.round || 0);
    this.map().update(data.map || {});
    this.adventureName.set(data.adventure || '');
    this.initiatives.set(data.initative ? InitiativeQueue.fromData(this, data.initative) : undefined);
  }

  override toData(): Data {
    return {
      image: this.image(),
      time: this.dateTime().toTimeString(),
      date: this.dateTime().toDateString(),
      screenImage: this.screenImage(),
      round: this.round(),
      map: this.map().toData(),
      adventure: this.adventureName(),
      initative: this.initiatives()?.toData(),
    };
  }

  static fromData(
    audioService: AudioService,
    entitiesService: EntitiesService,
    campaignService: CampaignService,
    name: string,
    data: Data,
  ): Campaign {
    return new Campaign(campaignService, audioService, entitiesService, name, data);
  }

  protected async doLoad() {}

  createAdventure(name: string, data: AdventureData): Adventure {
    return new Adventure(this.adventureService, this.entitiesService, this, name, data);
  }

  createJournalEntry(data: JournalData): JournalEntry {
    return new JournalEntry(this.journalService, this, data);
  }

  createEvent(data: EventData): CampaignEvent {
    return new CampaignEvent(this.eventService, this, data);
  }

  createNPC(name: string, data: NpcData): CampaignNPC {
    return new CampaignNPC(this.campaignNpcService, this, name, data);
  }

  maybeGetAdventure(name: string | null): Adventure | undefined {
    return this.adventureService.maybeGet(name || '');
  }

  getAdventure(name: string): Adventure {
    return this.adventureService.get(name);
  }

  async getNPC(name: string): Promise<CampaignNPC> {
    return this.campaignNpcService.get(name);
  }

  async advanceTime(hours: number, minutes: number) {
    this.dateTime.set(this.dateTime().advanceTime(hours, minutes));
    await this.save();
  }

  async advanceDate(years: number, days: number) {
    this.dateTime.set(this.dateTime().advanceDate(years, days));
    await this.save();
  }

  async advanceTimeSunrise() {
    this.dateTime.set(this.dateTime().advanceSunrise());
    await this.save();
  }

  async advanceTimeNoon() {
    this.dateTime.set(this.dateTime().advanceNoon());
    await this.save();
  }

  async advanceTimeSunset() {
    this.dateTime.set(this.dateTime().advanceSunset());
    await this.save();
  }

  async advanceTimeMidnight() {
    this.dateTime.set(this.dateTime().advanceMidnight());
    await this.save();
  }

  async addRound(value: number) {
    this.round.update((r) => r + value);
    await this.save();
  }

  async startBattle(participants: string[]) {
    this.round.set(1);
    this.initiatives.set(
      new InitiativeQueue(this, {
        participants: [...participants.map((p) => ({ name: p })), { name: 'Round', type: ParticipantType.round }],
      }),
    );
    await this.save();
  }

  async updateInitiative(participants: Participant[]) {
    this.initiatives.set(new InitiativeQueue(this, { participants: participants.map((p) => p.toData()) }));
    await this.save();
  }

  async nextInitiative() {
    if (this.initiatives()) {
      if (this.initiatives()!.next()) {
        this.addRound(1);
      }

      if (this.initiatives()?.participants().length) {
        const character = this.initiatives()?.participants()[0]?.character();
        const sound = character ? character.initiaveSound() : 'monster.mp3';
        if (sound) {
          this.audioService.play(sound);
        }
      }
      await this.save();
    }
  }

  async addInitiativeParticipant(name: string) {
    if (this.initiatives() && this.initiatives()?.participants()) {
      this.initiatives.set(
        new InitiativeQueue(this, {
          participants: [
            { name: name },
            ...this.initiatives()!
              .participants()!
              .map((p) => p.toData()),
          ],
        }),
      );
      await this.save();
    }
  }

  async setParticipantState(participant: Participant, state: ParticipantState, before = true) {
    participant.setState(state);
    if (state == ParticipantState.active) {
      this.initiatives()?.setActive(participant, before);
    }

    await this.save();
  }

  async endBattle() {
    this.round.set(0);
    this.initiatives.set(undefined);
    await this.save();
  }

  async setScreenImage(image: string) {
    this.screenImage.set(image);
    await this.save();
  }

  async setMap(map: string) {
    this.map.set(new MapInfo(this.entitiesService, { name: map }));
    await this.save();
  }

  async setMapLayers(layers: string[]) {
    this.map.update((m) => m.withLayers(layers));
    await this.save();
  }

  async setMapPosition(x: number, y: number) {
    this.map.update((m) => m.withPosition(x, y));
    await this.save();
  }

  async addMapToken(token: TokenInfo) {
    this.map().addToken(token);
    await this.save();
  }

  async removeMapToken(token: TokenInfo) {
    this.map().removeToken(token);
    await this.save();
  }

  async toggleMapGrid() {
    this.map().toggleGrid();
    await this.save();
  }

  async rotateMapToken(token: TokenInfo, rotation: number) {
    this.map().rotateToken(token, rotation);
    await this.save();
  }

  async updateMapToken(token: TokenInfo, x: number, y: number) {
    token.x.set(x);
    token.y.set(y);
    await this.save();
  }

  async setMapRotation(rotation: number) {
    this.map.update((m) => m.withRotation(rotation));
    await this.save();
  }

  async setAdventure(adventure: Adventure) {
    this.adventureName.set(adventure.name);
    this.adventureService.save(adventure);
    await this.save();
  }

  async deleteAdventure(adventure: Adventure) {
    await this.adventureService.delete(adventure);
  }

  async addEvent(event: CampaignEvent) {
    if (event.notes()) {
      await this.eventService.save(event);
    } else {
      await this.eventService.delete(event);
    }
  }

  async addNoteToCurrentJournal(note: string) {
    // The current journal entry is always the last one.
    const entry = this.journals()[this.journals().length - 1];
    entry.addNote(note);
    await this.setJournalEntry(entry);
  }

  async setJournalEntry(entry: JournalEntry) {
    await this.journalService.save(entry);
  }

  private recomputeJournalEntries(entries: JournalEntry[]): JournalEntry[] {
    const sorted = entries.toSorted((a, b) =>
      a.date().isBefore(b.date()) ? -1 : b.date().isBefore(a.date()) ? +1 : 0,
    );

    // Ensure we have an entry at the current date, assuming that the journal is properly sorted.
    if (!sorted.length || sorted[sorted.length - 1].date().toDateString() !== this.dateTime().toDateString()) {
      sorted.push(
        new JournalEntry(this.journalService, this, {
          campaignDate: this.dateTime().toDateString(),
          realDates: [],
          notes: [],
        }),
      );
    }

    return sorted;
  }

  private computeCurrentEvents(events: CampaignEvent[]): CampaignEvent[] {
    if (events.length < CURRENT_EVENTS_BEFORE + CURRENT_EVENTS_AFTER) {
      return events;
    }

    const before = events.filter((e) => e.date().isBefore(this.dateTime()));
    const after = events.filter((e) => !e.date().isBefore(this.dateTime()));

    return [...before.slice(-CURRENT_EVENTS_BEFORE, before.length), ...after.slice(0, CURRENT_EVENTS_AFTER)];
  }
}
