import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NPC } from '../../../data/entities/npc';
import { Campaign } from '../../../data/things/campaign';

export interface Data {
  npc: NPC;
  campaign?: Campaign;
}

@Component({
  selector: 'npc-dialog',
  templateUrl: './npc-dialog.component.html',
  styleUrls: ['./npc-dialog.component.scss'],
})
export class NPCDialogComponent {
  readonly npc: NPC;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data) {
    this.npc = data.npc;
    this.campaign = data.campaign;
  }
}
