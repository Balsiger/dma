import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../../data/entities/spell';
import { Campaign } from '../../data/facts/campaign';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { SpellComponent } from './spell.component';

export interface Data {
  spell: Spell;
  campaign?: Campaign;
}

@Component({
  selector: 'spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.scss'],
  imports: [FormattedTextComponent, SpellComponent, ScreenImageButtonComponent],
})
export class SpellDialogComponent {
  readonly spell: Spell;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data, changeDetector: ChangeDetectorRef) {
    this.spell = data.spell;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
