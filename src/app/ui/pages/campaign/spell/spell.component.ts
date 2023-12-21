import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Spell } from '../../../../data/spell';
import { FormattedTextComponent } from '../../../common/formatted-text/formatted-text.component';
import { LabeledTextComponent } from '../../../common/labeled-text/labeled-text.component';
import { LinkComponent } from '../../../common/link/link.component';
import { TaperComponent } from '../../../common/taper/taper.component';
import { ReferenceComponent } from '../../common/reference/reference.component';
import { EntityComponent } from '../entity/entity.component';
import { SpellDialogComponent } from '../spell-dialog/spell-dialog.component';

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
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
})
export class SpellComponent {
  @Input() spell!: Spell;
  @Input() collapsed = true;
  @Input() overview = true;

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(SpellDialogComponent, { maxWidth: '90vw', maxHeight: '90vh', data: this.spell });
  }
}
