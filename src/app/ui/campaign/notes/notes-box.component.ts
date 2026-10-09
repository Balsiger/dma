import { Component, input, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { Notes } from '../../../services/fluid/notes';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';

@Component({
  imports: [ExpandingBoxComponent, MatIcon, FormField, MatFormFieldModule, MatInputModule],
  selector: 'notes-box',
  styleUrl: './notes-box.component.scss',
  templateUrl: './notes-box.component.html',
})
export class NotesBoxComponent {
  campaign = input.required<Campaign>();
  notes = input.required<Notes>();

  model = signal({ note: '' });
  form = form(this.model);

  onChange() {
    this.notes()?.append(this.model().note);
    this.model.update((m) => ({ ...m, note: '' }));
  }

  onRemove(note: string) {
    this.notes()?.remove(note);
  }
}
