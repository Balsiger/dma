import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Campaign } from '../../../../data/things/campaign';
import { DateTime } from '../../../../data/values/date-time';
import { CampaignsService } from '../../../../services/campaigns.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    private readonly campaignsService: CampaignsService
  ) {
    this.name = new FormControl(campaign?.name || '', [
      Validators.required,
      validateName(this.campaignsService, campaign?.name || ''),
    ]);
    this.image = new FormControl(campaign?.image || '');
    this.time = new FormControl(campaign?.dateTime.toTimeString() || '');
    this.date = new FormControl(campaign?.dateTime.toDateString() || '');
    this.screenImage = new FormControl(campaign?.screenImage || '');
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.value) {
      this.ref.close(
        new Campaign(
          this.campaignsService,
          this.name.value,
          this.image.value || '',
          DateTime.fromStrings(this.date.value || '', this.time.value || ''),
          this.screenImage.value || '',
          this.campaign?.round || 0,
          this.campaign?.map || '',
          this.campaign?.mapLayers || [],
          this.campaign?.mapPosition || []
        )
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

function validateName(campaignService: CampaignsService, allowed: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != allowed && campaignService.has(control.value)) {
      return { exists: control.value };
    }

    return null;
  };
}
