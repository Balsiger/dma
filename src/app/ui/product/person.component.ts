import { Component, input } from '@angular/core';
import { Person } from '../../data/entities/static/product';

@Component({
  selector: 'person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  person = input<Person>();
}
