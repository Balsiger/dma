import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Campaign } from '../../../../data/facts/campaign';
import { CharacterService } from '../../../../services/character.service';
import { AdventureService } from '../../../../services/fact/adventure.service';
import { CampaignService } from '../../../../services/fact/campaign.service';
import { DialogComponent } from '../../../common/dialog/dialog.component';

@Component({
  selector: 'app-campaign-edit-dialog',
  templateUrl: './campaign-edit-dialog.component.html',
  styleUrls: ['./campaign-edit-dialog.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    DialogComponent,
  ],
})
export class CampaignEditDialogComponent {
  name: FormControl<string | null>;
  image: FormControl<string | null>;
  time: FormControl<string | null>;
  date: FormControl<string | null>;
  screenImage: FormControl<string | null>;

  constructor(
    private readonly ref: MatDialogRef<CampaignEditDialogComponent, Campaign>,
    @Inject(MAT_DIALOG_DATA) readonly campaign: Campaign | undefined,
    private readonly snackBar: MatSnackBar,
    private readonly campaignsService: CampaignService,
    private readonly characterService: CharacterService,
    private readonly adventureService: AdventureService,
  ) {
    this.name = new FormControl(campaign?.name || '', [
      Validators.required,
      validateName(this.campaignsService, campaign?.name || ''),
    ]);
    this.image = new FormControl(campaign?.image() || '');
    this.time = new FormControl(campaign?.dateTime().toTimeString() || '');
    this.date = new FormControl(campaign?.dateTime().toDateString() || '');
    this.screenImage = new FormControl(campaign?.screenImage() || '');
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.value) {
      this.ref.close(
        new Campaign(this.campaignsService, this.name.value, {
          image: this.image.value || '',
          date: this.date.value || '',
          time: this.time.value || '',
          screenImage: this.screenImage.value || '',
          round: this.campaign?.round() || 0,
          map: this.campaign?.map().name || '',
          mapLayers: this.campaign?.map().layers || [],
          mapPosition: [this.campaign?.map().x || 0, this.campaign?.map().y || 0],
          mapRotation: this.campaign?.map().rotation || 0,
          adventure: this.campaign?.adventure()?.name,
        }),
      );
    } else {
      this.snackBar.open('A campaign must at least have a name!', 'Dismiss');
    }
  }

  computeErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'A value is required!';
    }

    if (control.hasError('exists')) {
      return 'Such a campaign already exists!';
    }

    return '';
  }
}

function validateName(campaignService: CampaignService, allowed: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != allowed && campaignService.has(control.value)) {
      return { exists: control.value };
    }

    return null;
  };
}
