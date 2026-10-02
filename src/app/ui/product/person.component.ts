import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../../data/entities/immutable/product';

@Component({
  selector: 'person',
  imports: [],
  templateUrl: './person.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  person = input<Person>();
}
