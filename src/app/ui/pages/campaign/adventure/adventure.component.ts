import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Adventure } from '../../../../data/adventure';
import { Campaign } from '../../../../data/Campaign';
import { Encounter } from '../../../../data/encounter';
import { CampaignsService } from '../../../../services/campaigns.service';
import { EncounterEditDialogComponent } from '../encounter-edit-dialog/encounter-edit-dialog.component';

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

  editDialog?: MatDialogRef<EncounterEditDialogComponent, Encounter | undefined>;

  constructor(
    private readonly campaignService: CampaignsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {
    this.load();
  }

  private async load() {
    this.campaign = await this.campaignService.loadCampaign(this.route.snapshot.paramMap.get('campaign'));
    this.adventure = await this.campaign?.getAdventure(this.route.snapshot.paramMap.get('adventure'));
    await this.adventure?.load();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.adventure?.encounters) {
      for (const encounter of this.adventure.encounters) {
        if (encounter.id === id) {
          this.currentEncounter = encounter;
        }
      }
    }
  }

  async onEncounterChange() {
    if (this.currentEncounter) {
      await this.router.navigate([
        'campaign',
        this.campaign?.name,
        'adventure',
        this.adventure?.name,
        this.currentEncounter.id,
      ]);
    }
  }

  async onAdd() {
    if (this.editDialog) {
      this.editDialog.close();
      this.editDialog = undefined;
    } else {
      this.editDialog = this.dialog.open(EncounterEditDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: {
          adventure: this.adventure,
          encounter: undefined,
        },
      });

      const encounter = await firstValueFrom(this.editDialog.afterClosed());
      if (encounter) {
        await this.campaignService.addEncounter(encounter);
        this.load();
      }
    }
  }

  async onEdit() {
    if (this.editDialog) {
      this.editDialog.close();
      this.editDialog = undefined;
    } else {
      this.editDialog = this.dialog.open(EncounterEditDialogComponent, {
        hasBackdrop: true,
        disableClose: true,
        data: {
          adventure: this.adventure,
          encounter: this.currentEncounter,
        },
      });

      const encounter = await firstValueFrom(this.editDialog.afterClosed());
      if (encounter) {
        await this.campaignService.changeEncounter(this.currentEncounter, encounter);
        this.load();
      }
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
}
