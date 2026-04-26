import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Character } from '../../../data/facts/character';

@Component({
  selector: 'profile-picture',
  imports: [MatIcon],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss',
})
export class ProfilePictureComponent {
  name = input.required<string>();
  image = input.required<string>();
  monster = input(false);
  character = input<Character | undefined>(undefined);
  cover = input(false);

  onDrink(event: Event) {
    this.character()?.drink();
    event.stopPropagation();
  }

  onFood(event: Event) {
    this.character()?.eat();
    event.stopPropagation();
  }
}
