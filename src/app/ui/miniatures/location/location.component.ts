import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LocationComponent {
  label = input('');
  type = input('');
}
