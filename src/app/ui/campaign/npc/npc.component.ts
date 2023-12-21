import { LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignNPC, NPC } from '../../../data/entities/npc';
import { Campaign } from '../../../data/things/campaign';
import { LabeledTextComponent } from '../../common/labeled-text/labeled-text.component';
import { EntityComponent } from '../../pages/campaign/entity/entity.component';
import { ReferenceComponent } from '../../pages/common/reference/reference.component';
import { MonsterTraitsComponent } from '../monster-traits/monster-traits.component';
import { MonsterValuesComponent } from '../monster-values/monster-values.component';
import { NPCDialogComponent } from '../npc-dialog/npc-dialog.component';

@Component({
  selector: 'npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    LowerCasePipe,
    EntityComponent,
    LabeledTextComponent,
    ReferenceComponent,
    MonsterValuesComponent,
    MonsterTraitsComponent,
  ],
})
export class NPCComponent implements OnChanges {
  @Input() npc!: NPC;
  @Input() campaign?: Campaign;
  @Input() overview = true;
  @Input() collapsed = true;

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
    this.campaignNPC = await this.campaign?.getNPC(this.npc.name);
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
