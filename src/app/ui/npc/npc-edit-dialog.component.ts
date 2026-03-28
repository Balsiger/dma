import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { NPC } from 'src/app/data/combined/npc';
import { Parametrized } from '../../data/entities/parametrized';
import { Campaign } from '../../data/facts/campaign';
import { NPCState } from '../../data/facts/npc-fact';
import { MiniatureSelection } from '../../data/values/miniature-selection';
import { DialogComponent } from '../common/dialog/dialog.component';
import { MiniatureSelectionDialogComponent } from '../miniatures/miniature-selection-dialog.component';

export interface Data {
  npc: NPC;
  campaign?: Campaign;
}

@Component({
  selector: 'npc-edit-dialog',
  templateUrl: './npc-edit-dialog.component.html',
  styleUrls: ['./npc-edit-dialog.component.scss'],
  imports: [DialogComponent, MatFormField, MatSelectModule, ReactiveFormsModule, MatButtonModule, MatTooltipModule],
})
export class NpcEditDialogComponent {
  npc: NPC;
  miniature: MiniatureSelection[];
  readonly campaign?: Campaign;

  readonly state: FormControl<string | null>;
  readonly STATES = Object.entries(NPCState);

  constructor(
    private readonly ref: MatDialogRef<NpcEditDialogComponent, NPC>,
    @Inject(MAT_DIALOG_DATA) data: Data,
    private readonly dialog: MatDialog,
  ) {
    this.npc = data.npc;
    this.miniature = data.npc.miniature();
    this.campaign = data.campaign;

    this.state = new FormControl(this.npc.state());
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(
      this.npc.withFact({ state: this.state.value || '', miniature: MiniatureSelection.toString(this.miniature) }),
    );
  }

  async onMini() {
    const dialog = this.dialog.open(MiniatureSelectionDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      panelClass: 'miniature-selection-dialog',
      minWidth: '90vw',
      minHeight: '90vh',
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        miniatures: new Map([[this.npc.race.name, this.npc.miniature()]]),
        monsters: [new Parametrized(this.npc.race.name, 1, [], new Map(), this.npc.race)],
      },
    });

    const miniatures = await firstValueFrom(dialog.afterClosed());
    if (miniatures) {
      const minis: Map<string, MiniatureSelection[]> = miniatures;
      this.miniature = Array.from(minis.values()).flatMap((m) => m);
    }
  }
}
