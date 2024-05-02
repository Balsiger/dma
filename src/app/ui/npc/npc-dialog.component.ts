import { ChangeDetectorRef, Component, Inject, forwardRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NPC } from '../../data/entities/npc';
import { Campaign } from '../../data/facts/campaign';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { NPCComponent } from './npc.component';

export interface Data {
  npc: NPC;
  campaign?: Campaign;
}

@Component({
  selector: 'npc-dialog',
  templateUrl: './npc-dialog.component.html',
  styleUrls: ['./npc-dialog.component.scss'],
  standalone: true,
  imports: [forwardRef(() => NPCComponent), ScreenImageButtonComponent, FormattedTextComponent],
})
export class NPCDialogComponent {
  readonly npc: NPC;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data, changeDetector: ChangeDetectorRef) {
    this.npc = data.npc;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
