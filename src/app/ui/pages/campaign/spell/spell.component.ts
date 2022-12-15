import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Spell } from '../../../../data/spell';
import { SpellDialogComponent } from '../spell-dialog/spell-dialog.component';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent {
  @Input() spell!: Spell;
  @Input() collapsed = true;

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: this.spell });
  }
}
