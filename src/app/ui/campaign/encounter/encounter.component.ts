import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { Encounter } from '../../../data/combined/encounter';
import { Adventure } from '../../../data/facts/adventure';
import { CampaignService } from '../../../services/fact/campaign.service';
import { BadgeComponent } from '../../common/badge/badge.component';
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { LinkComponent } from '../../common/link/link.component';
import { ItemComponent } from '../../item/item.component';
import { MiniatureSelectionDialogComponent } from '../../miniatures/miniature-selection-dialog.component';
import { MonsterComponent } from '../../monster/monster.component';
import { NPCComponent } from '../../npc/npc.component';
import { SpellComponent } from '../../spell/spell.component';
import { TrapComponent } from '../../trap/trap.component';
import { ScreenImageButtonComponent } from '../screen/screen-image-button.component';
import { EncounterEditDialogComponent } from './encounter-edit-dialog.component';

@Component({
  selector: 'encounter',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    BadgeComponent,
    FormattedTextComponent,
    LinkComponent,
    ScreenImageButtonComponent,
    NPCComponent,
    MonsterComponent,
    ItemComponent,
    SpellComponent,
    TrapComponent,
  ],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss',
})
export class EncounterComponent {
  adventure = input<Adventure>();
  encounter = input<Encounter | undefined>();
  showTitle = input(false);
  showActions = input(true);

  readonly expandedSpells = new Set<string>();
  readonly expandedItems = new Set<string>();
  readonly expandedMonsters = new Set<string>();
  readonly expandedNPCs = new Set<string>();
  readonly expandedTraps = new Set<string>();

  constructor(
    readonly campaignService: CampaignService,
    private readonly dialog: MatDialog,
  ) {}

  async onAdd() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure(),
        encounter: undefined,
        service: this.encounter()?.service,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      this.adventure()?.addEncounter(encounter);
    }
  }

  async onEdit() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure(),
        encounter: this.encounter(),
        service: this.encounter()?.service,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter && this.encounter()) {
      this.adventure()?.updateEncounter(this.encounter()!, encounter);
    }
  }

  async onDuplicate() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure(),
        encounter: this.encounter(),
        service: this.encounter()?.service,
        duplicate: true,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      this.adventure()?.addEncounter(encounter);
    }
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
        miniatures: this.encounter()?.miniatures(),
        monsters: this.encounter()?.monsters ?? [],
      },
    });

    const miniatures = await firstValueFrom(dialog.afterClosed());
    if (miniatures) {
      this.encounter()?.setMiniatures(miniatures);
    }
  }

  onDelete() {
    if (this.encounter() && confirm('Do you really want to delete encounter ' + this.encounter.name + '?')) {
      this.adventure()?.deleteEncounter(this.encounter()!);
    }
  }

  async onStartEncounter() {
    this.encounter()?.start();
  }

  async onFinishEncounter() {
    this.encounter()?.finish();
  }
}
