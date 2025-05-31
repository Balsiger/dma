import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../../data/entities/spell';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { SpellComponent } from './spell.component';

@Component({
  selector: 'spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.scss'],
  imports: [FormattedTextComponent, SpellComponent],
})
export class SpellDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) readonly spell: Spell,
    changeDetector: ChangeDetectorRef,
  ) {
    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
