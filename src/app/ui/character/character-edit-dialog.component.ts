import { ChangeDetectionStrategy, Component, computed, Inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Character } from '../../data/entities/combined/character';
import { Campaign } from '../../data/entities/fluid/campaign';
import { AudioService } from '../../services/audio.service';
import { ImmutablesService } from '../../services/immutable/immutables.service';
import { DialogComponent } from '../common/dialog/dialog.component';

export interface EditData {
  campaign: Campaign;
  character: Character;
}

@Component({
  selector: 'character-edit-dialog',
  imports: [
    DialogComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FormField,
    MatAutocompleteModule,
  ],
  templateUrl: './character-edit-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './character-edit-dialog.component.scss',
})
export class CharacterEditDialogComponent {
  campaign: Campaign;
  character?: Character;
  groupNames: string[];
  currentRenownIndex = 0;
  filteredGroupNames = computed(() => {
    const current = this.model().renown[this.currentRenownIndex].group;
    if (current.length < 1) {
      return this.groupNames;
    }

    return this.groupNames.filter((n) => n.toLowerCase().includes(current));
  });

  model = signal({
    name: '',
    image: '',
    profile: '',
    sound: '',
    levels: [''],
    renown: [
      {
        group: '',
        renown: 0,
      },
    ],
  });
  form = form(this.model, (f) => {
    required(f.name);
  });

  constructor(
    private readonly ref: MatDialogRef<CharacterEditDialogComponent, Character>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly audioService: AudioService,
    immutables: ImmutablesService,
  ) {
    this.campaign = data.campaign;
    this.character = data.character;

    this.groupNames = immutables.groups.getAll().map((g) => g.name);

    this.model.set({
      name: this.character?.name ?? '',
      image: this.character?.portrait ?? '',
      profile: this.character?.profile()?.url ?? '',
      sound: this.character?.initiativeSound() ?? '',
      levels: this.character?.levels() ?? [],
      renown: this.character?.renown().map((r) => r.toData()),
    });
    if (this.model().levels.length === 0 || this.model().levels[this.model().levels.length - 1] !== '') {
      this.model().levels.push('');
    }
    if (this.model().renown.length === 0 || this.model().renown[this.model().renown.length - 1].group !== '') {
      this.model().renown.push({ group: '', renown: 0 });
    }
  }

  onSave() {
    const character = this.campaign.createCharacter(this.form.name().value(), {
      image: this.form.image().value(),
      profile: this.form.profile().value(),
      levels: this.form
        .levels()
        .value()
        .filter((l) => !!l),
      initiativeSound: this.form.sound().value(),
      renown: this.form
        .renown()
        .value()
        .filter((r) => !!r.group),
    });
    this.ref.close(character);
  }

  onCancel() {
    this.ref.close();
  }

  onPlay() {
    if (this.form.sound().value()) {
      this.audioService.play(this.form.sound().value());
    }
  }

  onRenown(i: number) {
    this.currentRenownIndex = i;
    console.log('~~current renown', this.currentRenownIndex, i);
  }
}
