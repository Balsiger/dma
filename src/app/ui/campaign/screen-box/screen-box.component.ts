import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { CampaignScreenComponent } from '../../pages/campaign/campaign-screen/campaign-screen.component';

const WINDOW_SCREEN = 'dma-campaign-screen';
const WINDOW_MAP = 'dma-campaign-map';

@Component({
  selector: 'screen-box',
  standalone: true,
  imports: [
    CommonModule,
    ExpandingBoxComponent,
    CampaignScreenComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './screen-box.component.html',
  styleUrl: './screen-box.component.scss',
})
export class ScreenBoxComponent implements OnChanges {
  @Input() campaign?: Campaign;
  @Input() screenImage?: string;

  image = new FormControl(this.screenImage || '');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['screenImage']) {
      this.image.setValue(this.screenImage || '');
    }
  }

  onImageChange() {
    this.campaign?.setScreenImage(this.image.value || '');
  }

  onScreen() {
    if (this.campaign) {
      window.open('/screen/' + this.campaign.name, WINDOW_SCREEN);
    }
  }

  onMap() {
    if (this.campaign) {
      window.open('/campaign/' + this.campaign.name + '/map', WINDOW_MAP);
    }
  }
}
