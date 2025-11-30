import { LowerCasePipe } from '@angular/common';
import { Component, OnChanges, SimpleChanges, forwardRef, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignNPC, NPC } from '../../data/entities/npc';
import { Campaign } from '../../data/facts/campaign';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { EntityComponent } from '../entities/entity.component';
import { MonsterTraitsComponent } from '../monster/monster-traits.component';
import { MonsterValuesComponent } from '../monster/monster-values.component';
import { ListPipe } from '../pipes/list.pipe';
import { NPCDialogComponent } from './npc-dialog.component';

@Component({
  selector: 'npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss'],
  imports: [
    ListPipe,
    LowerCasePipe,
    EntityComponent,
    LabeledTextComponent,
    forwardRef(() => ReferenceComponent),
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

  expand = output<void>();
  collapse = output<void>();

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
        npc: this.npc(),
        campaign: this.campaign(),
      },
    });
  }
}
