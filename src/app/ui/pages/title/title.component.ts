import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  user: User | null = null;

  constructor() {}
}
