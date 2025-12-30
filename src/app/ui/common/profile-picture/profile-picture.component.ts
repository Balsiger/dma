import { Component, input } from '@angular/core';

@Component({
  selector: 'profile-picture',
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss',
})
export class ProfilePictureComponent {
  name = input.required<string>();
  image = input.required<string>();
}
