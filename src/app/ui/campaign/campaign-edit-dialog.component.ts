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
import { Campaign } from '../../data/facts/campaign';
import { AudioService } from '../../services/audio.service';
import { TokensService } from '../../services/entity/tokens.service';
import { CampaignService } from '../../services/fact/campaign.service';
import { DialogComponent } from '../common/dialog/dialog.component';

@Component({
  selector: 'campaign-edit-dialog',
  templateUrl: './campaign-edit-dialog.component.html',
  styleUrls: ['./campaign-edit-dialog.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, DialogComponent],
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
    private readonly tokenService: TokensService,
    private readonly audioService: AudioService,
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
        new Campaign(this.campaignsService, this.tokenService, this.audioService, this.name.value, {
          image: this.image.value || '',
          date: this.date.value || '',
          time: this.time.value || '',
          screenImage: this.screenImage.value || '',
          round: this.campaign?.round() || 0,
          adventure: this.campaign?.adventure()?.name,
          map: {
            name: this.campaign?.map().name() || '',
            layers: this.campaign?.map().layers() || [],
            x: this.campaign?.map().x() || 0,
            y: this.campaign?.map().y() || 0,
            rotation: this.campaign?.map().rotation() || 0,
          },
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
