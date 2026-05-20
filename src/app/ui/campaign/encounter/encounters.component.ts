import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Encounter } from '../../../data/combined/encounter';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Adventure } from '../../../data/facts/adventure';
import { EncounterFact } from '../../../data/facts/encounter-fact';
import { Creature } from '../../../data/local/creature';
import { CampaignService } from '../../../services/fact/campaign.service';
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
  encounterEntities = input<EncounterEntity[]>([]);
  selectedCreature = input<Selected>({});

  died = output<Creature>();

  readonly expandedSpells = new Set<string>();

  constructor(readonly campaignsService: CampaignService) {}

  onChange(encounter?: Encounter) {
    if (encounter) {
      this.adventure()?.setEncounter(encounter);
    }
  }

  onChangeEntity(encounter?: EncounterEntity) {
    if (encounter) {
      this.adventure()?.setEncounterEntity(encounter);
    }
  }
}
