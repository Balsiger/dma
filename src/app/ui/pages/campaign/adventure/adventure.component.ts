import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../../data/facts/adventure';
import { Campaign } from '../../../../data/facts/campaign';
import { Encounter } from '../../../../data/facts/encounter';
import { CampaignService } from '../../../../services/fact/campaign.service';
import { NPCComponent } from '../../../campaign/npc/npc.component';
import { BadgeComponent } from '../../../common/badge/badge.component';
import { LinkComponent } from '../../../common/link/link.component';
import { PageComponent } from '../../../common/page/page.component';
import { AdventureSummaryDialogComponent } from '../adventure-summary-dialog/adventure-summary-dialog.component';
import { CampaignComponent } from '../campaign.component';
import { EncounterEditDialogComponent } from '../encounter-edit-dialog/encounter-edit-dialog.component';
import { ItemComponent } from '../item/item.component';
import { MiniatureSelectionDialogComponent } from '../miniature-selection-dialog/miniature-selection-dialog.component';
import { MonsterComponent } from '../monster/monster.component';
import { ScreenImageButtonComponent } from '../screen-image-button/screen-image-button.component';
import { SpellComponent } from '../spell/spell.component';

export interface EditData {
  adventure: Adventure;
  encounter?: Encounter;
}

@Component({
  selector: 'adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
  standalone: true,
  imports: [
    PageComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    NgFor,
    MatOptionModule,
    NgIf,
    ScreenImageButtonComponent,
    LinkComponent,
    NPCComponent,
    MatButtonModule,
    MatIconModule,
    MonsterComponent,
    ItemComponent,
    CampaignComponent,
    SpellComponent,
    BadgeComponent,
  ],
})
export class AdventureComponent {
  campaign?: Campaign;
  adventure?: Adventure;
  currentEncounter?: Encounter;
  previousEncounter?: Encounter;
  nextEncounter?: Encounter;

  constructor(
    private readonly campaignService: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialog: MatDialog,
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = await this.campaignService.getCampaign(campaignName);
    } else {
      this.campaign = undefined;
    }
    this.adventure = await this.campaign?.getAdventure(this.route.snapshot.paramMap.get('adventure'));
    await this.adventure?.load();

    this.update();
  }

  private update() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.adventure?.encounters) {
      this.previousEncounter = undefined;
      this.currentEncounter = undefined;
      this.nextEncounter = undefined;

      var last = undefined;
      for (const encounter of this.adventure.encounters()) {
        if (encounter.id === id) {
          this.currentEncounter = encounter;
          this.previousEncounter = last;
        } else if (this.currentEncounter) {
          this.nextEncounter = encounter;
          break;
        } else if (!this.previousEncounter) {
          last = encounter;
        } else if (this.currentEncounter) {
          this.nextEncounter = encounter;
          break;
        }
      }
    }
  }

  async onEncounterChange(encounter?: Encounter) {
    if (encounter) {
      await this.router.navigate(['campaign', this.campaign?.name, 'adventure', this.adventure?.name, encounter.id]);
      this.update();
    }
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
      await this.campaignService.addEncounter(encounter);
      this.load();
    }
  }

  async onEdit() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure,
        encounter: this.currentEncounter,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      await this.campaignService.changeEncounter(this.currentEncounter, encounter);
      this.load();
    }
  }

  async onDuplicate() {
    const dialog = this.dialog.open(EncounterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        adventure: this.adventure,
        encounter: this.currentEncounter,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      await this.campaignService.addEncounter(encounter);
      this.load();
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
        encounter: this.currentEncounter,
      },
    });

    const encounter = await firstValueFrom(dialog.afterClosed());
    if (encounter) {
      await this.campaignService.changeEncounter(this.currentEncounter, encounter);
      this.load();
    }
  }

  async onDelete() {
    if (
      this.currentEncounter &&
      confirm('Do you really want to delete encounter ' + this.currentEncounter.name + '?')
    ) {
      await this.campaignService.deleteEncounter(this.currentEncounter);
      this.currentEncounter = undefined;
      this.load();
    }
  }

  async onStartEncounter() {
    if (this.currentEncounter) {
      const started = this.currentEncounter?.start_dep();
      await this.campaignService.changeEncounter(this.currentEncounter, started);
      this.load();
    }
  }

  async onFinishEncounter() {
    if (this.currentEncounter) {
      const started = this.currentEncounter?.finish_dep();
      await this.campaignService.changeEncounter(this.currentEncounter, started);
      this.load();
    }
  }

  onSummarize() {
    this.dialog.open(AdventureSummaryDialogComponent, {
      hasBackdrop: true,
      minWidth: '90vw',
      minHeight: '90vh',
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        adventure: this.adventure,
      },
    });
  }
}
