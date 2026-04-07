import { LowerCasePipe } from '@angular/common';
import { Component, forwardRef, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { NPC } from 'src/app/data/combined/npc';
import { Campaign } from '../../data/facts/campaign';
import { Effect } from '../../data/values/effect';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { ReferenceComponent } from '../common/reference/reference.component';
import { EntityComponent } from '../entities/entity.component';
import { MonsterTraitsComponent } from '../monster/monster-traits.component';
import { MonsterValuesComponent } from '../monster/monster-values.component';
import { ListPipe } from '../pipes/list.pipe';
import { NPCDialogComponent } from './npc-dialog.component';
import { NpcEditDialogComponent } from './npc-edit-dialog.component';

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
export class NPCComponent {
  campaign = input<Campaign>();
  npc = input.required<NPC>();
  overview = input(true);
  collapsed = input(true);
  expandable = input(true);

  expand = output<void>();
  collapse = output<void>();
  effects = output<Effect[]>();

  constructor(private readonly dialog: MatDialog) {}

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

  async onEdit() {
    const dialog = this.dialog.open(NpcEditDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        npc: this.npc(),
        campaign: this.campaign(),
      },
    });

    const npc = await firstValueFrom(dialog.afterClosed());
    if (npc) {
      this.npc().update(npc);
    }
  }

  onReset() {
    this.npc().reset();
  }
}
