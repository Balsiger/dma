import { NgSwitch } from '@angular/common';
import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Spell } from '../../data/entities/spell';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { LinkComponent } from '../common/link/link.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { TaperComponent } from '../common/taper/taper.component';
import { EntityComponent } from '../entities/entity.component';
import { SpellDialogComponent } from './spell-dialog.component';

@Component({
  standalone: true,
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
  imports: [
    ReferenceComponent,
    forwardRef(() => EntityComponent),
    NgSwitch,
    LabeledTextComponent,
    LinkComponent,
    TaperComponent,
    FormattedTextComponent,
  ],
})
export class SpellComponent {
  spell = input.required<Spell>();
  overview = input(true);
  collapsed = model(true);

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: this.spell() });
  }
}
