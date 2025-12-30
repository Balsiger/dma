import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Campaign } from '../../../data/facts/campaign';
import { Character } from '../../../data/facts/character';
import { CharacterEditDialogComponent } from '../../character/character-edit-dialog.component';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { ProfilePictureComponent } from '../../common/profile-picture/profile-picture.component';

@Component({
  selector: 'party-box',
  imports: [CommonModule, ExpandingBoxComponent, ProfilePictureComponent],
  templateUrl: './party-box.component.html',
  styleUrl: './party-box.component.scss',
})
export class PartyBoxComponent {
  campaign = input<Campaign>();

  constructor(private readonly dialog: MatDialog) {}

  async onCharacter(character: Character) {
    const dialog = this.dialog.open(CharacterEditDialogComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        campaign: this.campaign(),
        character: character,
      },
    });

    const update = await firstValueFrom(dialog.afterClosed());
    if (update) {
      this.campaign()?.updateCharacter(character, update);
    }
  }
}
