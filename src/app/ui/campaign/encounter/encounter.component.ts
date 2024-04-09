import { Component, Input } from '@angular/core';
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
import { EncounterEditDialogComponent } from '../../pages/campaign/encounter-edit-dialog/encounter-edit-dialog.component';
import { ItemComponent } from '../../pages/campaign/item/item.component';
import { MiniatureSelectionDialogComponent } from '../../pages/campaign/miniature-selection-dialog/miniature-selection-dialog.component';
import { MonsterComponent } from '../../pages/campaign/monster/monster.component';
import { ScreenImageButtonComponent } from '../../pages/campaign/screen-image-button/screen-image-button.component';
import { SpellComponent } from '../../pages/campaign/spell/spell.component';
import { NPCComponent } from '../npc/npc.component';

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
  ],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss',
})
export class EncounterComponent {
  @Input() adventure?: Adventure;
  @Input() encounter?: Encounter;

  constructor(
    readonly campaignService: CampaignService,
    private readonly dialog: MatDialog,
  ) {}

  async onStartEncounter() {
    this.encounter?.start();
  }

  async onFinishEncounter() {
    this.encounter?.finish();
  }

  async onAdd() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure,
        encounter: undefined,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      this.adventure?.addEncounter(encounter);
    }
  }

  async onEdit() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure,
        encounter: this.encounter,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter && this.encounter) {
      this.adventure?.updateEncounter(this.encounter, encounter);
    }
  }

  async onDuplicate() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure,
        encounter: this.encounter,
        duplicate: true,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      this.adventure?.addEncounter(encounter);
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
        adventure: this.adventure,
        encounter: this.encounter,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter && this.encounter) {
      this.adventure?.updateEncounter(this.encounter, encounter);
    }
  }

  onDelete() {
    if (this.encounter && confirm('Do you really want to delete encounter ' + this.encounter.name + '?')) {
      this.adventure?.deleteEncounter(this.encounter);
    }
  }
}
