import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../data/facts/adventure';
import { Encounter } from '../../../data/facts/encounter';
import { CampaignService } from '../../../services/fact/campaign.service';
import { BadgeComponent } from '../../common/badge/badge.component';
import { LinkComponent } from '../../common/link/link.component';
import { ItemComponent } from '../../item/item.component';
import { MiniatureSelectionDialogComponent } from '../../miniatures/miniature-selection-dialog.component';
import { MonsterComponent } from '../../monster/monster.component';
import { NPCComponent } from '../../npc/npc.component';
import { SpellComponent } from '../../spell/spell.component';
import { ScreenImageButtonComponent } from '../screen/screen-image-button.component';
import { EncounterEditDialogComponent } from './encounter-edit-dialog.component';
import { EncounterEntityComponent } from './encounter-entity.component';

@Component({
  selector: 'encounter',
  standalone: true,
  imports: [
    ScreenImageButtonComponent,
    BadgeComponent,
    LinkComponent,
    NPCComponent,
    MonsterComponent,
    SpellComponent,
    ItemComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    EncounterEntityComponent,
  ],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss',
})
export class EncounterComponent {
  adventure = input<Adventure>();
  encounter = input<Encounter>();

  readonly expandedSpells = new Set<string>();
  readonly expandedItems = new Set<string>();
  readonly expandedMonsters = new Set<string>();
  readonly expandedNPCs = new Set<string>();

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
        service: this.encounter()?.encounterService,
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
        service: this.encounter()?.encounterService,
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
        service: this.encounter()?.encounterService,
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
        adventure: this.adventure(),
        encounter: this.encounter(),
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter && this.encounter()) {
      this.adventure()?.updateEncounter(this.encounter()!, this.encounter()!);
    }
  }

  onDelete() {
    if (this.encounter() && confirm('Do you really want to delete encounter ' + this.encounter.name + '?')) {
      this.adventure()?.deleteEncounter(this.encounter()!);
    }
  }
}
