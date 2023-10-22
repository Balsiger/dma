import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../../data/things/adventure';
import { Campaign, EMPTY } from '../../../../data/things/campaign';
import { Encounter } from '../../../../data/things/encounter';
import { CampaignsService } from '../../../../services/campaigns.service';
import { AdventureSummaryDialogComponent } from '../adventure-summary-dialog/adventure-summary-dialog.component';
import { EncounterEditDialogComponent } from '../encounter-edit-dialog/encounter-edit-dialog.component';
import { MiniatureSelectionDialogComponent } from '../miniature-selection-dialog/miniature-selection-dialog.component';

export interface EditData {
  adventure: Adventure;
  encounter?: Encounter;
}

@Component({
  selector: 'adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent {
  campaign?: Campaign;
  adventure?: Adventure;
  currentEncounter?: Encounter;
  previousEncounter?: Encounter;
  nextEncounter?: Encounter;

  constructor(
    private readonly campaignService: CampaignsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {
    this.load();
  }

  private async load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = await this.campaignService.getCampaign(campaignName);
    } else {
      this.campaign = EMPTY;
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
      for (const encounter of this.adventure.encounters) {
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
