import { Component, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Spell } from '../../../../data/spell';
import { SpellDialogComponent } from '../spell-dialog/spell-dialog.component';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent {
  @Input() spell!: Spell;

  constructor(private readonly dialog: MatDialog) {}

  onName() {
    this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: this.spell });
  }
}
