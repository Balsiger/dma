import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Spell } from '../../../../data/spell';

@Component({
  selector: 'spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.scss'],
})
export class SpellDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly spell: Spell) {}
}
