import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../../../../data/spell';
import { FormattedTextComponent } from '../../../common/formatted-text/formatted-text.component';
import { EntityComponent } from '../entity/entity.component';
import { SpellComponent } from '../spell/spell.component';

@Component({
  selector: 'spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.scss'],
  standalone: true,
  imports: [NgIf, FormattedTextComponent, SpellComponent, EntityComponent],
})
export class SpellDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly spell: Spell) {}
}
