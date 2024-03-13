import { Component, Input } from '@angular/core';
import { Person } from '../../../data/entities/product';

@Component({
  selector: 'person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  @Input() person?: Person;
}
