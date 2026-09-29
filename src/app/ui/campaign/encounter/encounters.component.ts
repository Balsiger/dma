import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Creature } from '../../../data/entities/combined/creature';
import { Encounter } from '../../../data/entities/combined/encounter';
import { Adventure } from '../../../data/entities/fluid/adventure';
import { EncounterFact } from '../../../data/entities/fluid/encounter-fact';
import { ImmutableEncounter } from '../../../data/entities/immutable/encounter-entity';
import { FluidCampaignService } from '../../../services/fluid/campaign.service';
import { Selected } from '../initiative-queue/initiative-queue.component';
import { EncounterComponent } from './encounter.component';

@Component({
  selector: 'encounters',
  imports: [MatFormFieldModule, MatSelectModule, MatSelectModule, FormsModule, MatButtonModule, EncounterComponent],
  templateUrl: './encounters.component.html',
  styleUrl: './encounters.component.scss',
})
export class EncountersComponent {
  adventure = input<Adventure>();
  encounters = input<EncounterFact[]>([]);
  encounterEntities = input<ImmutableEncounter[]>([]);
  selectedCreature = input<Selected>({});

  died = output<Creature>();

  readonly expandedSpells = new Set<string>();

  constructor(readonly campaignsService: FluidCampaignService) {}

  onChange(encounter?: Encounter) {
    if (encounter) {
      this.adventure()?.setEncounter(encounter);
    }
  }

  onChangeEntity(encounter?: ImmutableEncounter) {
    if (encounter) {
      this.adventure()?.setEncounterEntity(encounter);
    }
  }
}
