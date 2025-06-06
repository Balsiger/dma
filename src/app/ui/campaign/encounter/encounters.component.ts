import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Adventure } from '../../../data/facts/adventure';
import { Encounter } from '../../../data/facts/encounter';
import { CampaignService } from '../../../services/fact/campaign.service';
import { EncounterComponent } from './encounter.component';

@Component({
    selector: 'encounters',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        EncounterComponent,
    ],
    templateUrl: './encounters.component.html',
    styleUrl: './encounters.component.scss'
})
export class EncountersComponent {
  adventure = input<Adventure>();
  encounters = input<Encounter[]>([]);
  encounterEntities = input<EncounterEntity[]>([]);

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

  cmp(option: any, selection: any): boolean {
    return false;
  }
}
