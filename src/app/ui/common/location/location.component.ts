import { Component, Input } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  @Input() label = '';
  @Input() type = '';

  constructor() { }
}
