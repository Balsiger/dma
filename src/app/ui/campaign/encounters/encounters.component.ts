import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Adventure } from '../../../data/things/adventure';
import { Encounter } from '../../../data/things/encounter';
import { CampaignsService } from '../../../services/campaigns.service';
import { EncounterComponent } from '../encounter/encounter.component';

@Component({
  selector: 'encounters',
  standalone: true,
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
  styleUrl: './encounters.component.scss',
})
export class EncountersComponent {
  adventure = input<Adventure>();
  @Input() encounters: Encounter[] = [];

  constructor(readonly campaignsService: CampaignsService) {}

  onChange(encounter?: Encounter) {
    if (encounter) {
      this.adventure()?.setEncounter(this.campaignsService, encounter.id);
    }
  }
}
