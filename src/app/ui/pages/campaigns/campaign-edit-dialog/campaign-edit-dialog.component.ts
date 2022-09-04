import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Campaign } from '../../../../data/Campaign';
import { CampaignsService } from '../../../../services/campaigns.service';

@Component({
  selector: 'app-campaign-edit-dialog',
  templateUrl: './campaign-edit-dialog.component.html',
  styleUrls: ['./campaign-edit-dialog.component.scss']
})
export class CampaignEditDialogComponent {
  name: FormControl<string | null>;
  image: FormControl<string | null>;

  constructor(private readonly ref: MatDialogRef<CampaignEditDialogComponent, Campaign>,
    @Inject(MAT_DIALOG_DATA) readonly campaign: Campaign, private readonly snackBar: MatSnackBar,
    private readonly campaignService: CampaignsService) {

    this.name = new FormControl(campaign?.name,
      [Validators.required, validateName(this.campaignService, campaign?.name)]);
    this.image = new FormControl(campaign?.image);
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    if (this.name.value) {
      this.ref.close(new Campaign(this.name.value, this.image.value || ''));
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

