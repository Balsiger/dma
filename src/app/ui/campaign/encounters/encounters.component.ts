import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Encounter } from '../../../data/things/encounter';

@Component({
  selector: 'encounters',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatSelectModule, FormsModule],
  templateUrl: './encounters.component.html',
  styleUrl: './encounters.component.scss',
})
export class EncountersComponent {
  //encounters = input<Encounter[]>();
  //@Input() encounters: Encounter[] = [];
  currentEncounter?: Encounter;

  onChange(encounter?: Encounter) {
    if (encounter) {
      //await this.router.navigate(['campaign', this.campaign?.name, 'adventure', this.adventure?.name, encounter.id]);
      //this.update();
    }
  }
}
