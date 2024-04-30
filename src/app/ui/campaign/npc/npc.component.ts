import { LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, OnChanges, Output, SimpleChanges, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignNPC, NPC } from '../../../data/entities/npc';
import { Campaign } from '../../../data/facts/campaign';
import { LabeledTextComponent } from '../../common/labeled-text/labeled-text.component';
import { ListPipe } from '../../common/list.pipe';
import { MonsterTraitsComponent } from '../../monster/monster-traits.component';
import { MonsterValuesComponent } from '../../monster/monster-values.component';
import { EntityComponent } from '../../pages/campaign/entity/entity.component';
import { ReferenceComponent } from '../../pages/common/reference/reference.component';
import { NPCDialogComponent } from '../npc-dialog/npc-dialog.component';

@Component({
  selector: 'npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss'],
  standalone: true,
  imports: [
    ListPipe,
    LowerCasePipe,
    EntityComponent,
    LabeledTextComponent,
    ReferenceComponent,
    MonsterValuesComponent,
    MonsterTraitsComponent,
  ],
})
export class NPCComponent implements OnChanges {
  campaign = input<Campaign>();
  npc = input.required<NPC>();
  overview = input(true);
  collapsed = input(true);
  miniature = input<string>();

  @Output() expand = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();

  campaignNPC?: CampaignNPC;

  constructor(private readonly dialog: MatDialog) {
    this.load();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['campaign']) {
      this.load();
    }
  }

  private async load() {
    this.campaignNPC = await this.campaign()?.getNPC(this.npc.name);
  }

  onFull() {
    this.dialog.open(NPCDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        npc: this.npc,
        campaign: this.campaign,
      },
    });
  }
}
