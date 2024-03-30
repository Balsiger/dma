import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';

@Component({
  selector: 'date-time-box',
  standalone: true,
  imports: [CommonModule, ExpandingBoxComponent, MatButtonModule],
  templateUrl: './date-time-box.component.html',
  styleUrl: './date-time-box.component.scss',
})
export class DateTimeBoxComponent {
  @Input() campaign?: Campaign;
}
