import { Component, input } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true,
})
export class LocationComponent {
  label = input('');
  type = input('');
}
