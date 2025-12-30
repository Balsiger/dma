import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Campaign } from '../../data/facts/campaign';
import { Character } from '../../data/facts/character';
import { AudioService } from '../../services/audio.service';
import { DialogComponent } from '../common/dialog/dialog.component';

export interface EditData {
  campaign: Campaign;
  character: Character;
}

@Component({
  selector: 'character-edit-dialog',
  imports: [DialogComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './character-edit-dialog.component.html',
  styleUrl: './character-edit-dialog.component.scss',
})
export class CharacterEditDialogComponent {
  campaign: Campaign;
  character: Character;

  name: FormControl<string | null>;
  image: FormControl<string | null>;
  profile: FormControl<string | null>;
  sound: FormControl<string | null>;
  levels: FormControl<string | null>[];

  constructor(
    private readonly ref: MatDialogRef<CharacterEditDialogComponent, Character>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
    private readonly audioService: AudioService,
  ) {
    this.campaign = data.campaign;
    this.character = data.character;

    this.name = new FormControl(this.character.name(), [Validators.required]);
    this.image = new FormControl(this.character.image().url);
    this.profile = new FormControl(this.character.profile().url);
    this.sound = new FormControl(this.character.initiaveSound());
    this.levels = this.character.levels().map((l) => new FormControl(l));
    this.levels.push(new FormControl(''));
  }

  onSave() {
    const character = this.campaign.createCharacter(this.name.value || '', {
      image: this.image.value || '',
      profile: this.profile.value || '',
      levels: this.levels.map((l) => l.value || '').filter((l) => !!l),
      initiativeSound: this.sound.value || '',
    });
    this.ref.close(character);
  }

  onCancel() {
    this.ref.close();
  }

  onPlay() {
    if (this.sound.value) {
      this.audioService.play(this.sound.value);
    }
  }
}
