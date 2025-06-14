import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Entity } from '../../data/entities/entity';
import { Campaign } from '../../data/facts/campaign';
import { DialogType, Dialogs } from '../dialogs/dialogs';

@Component({
  selector: 'entity-tile',
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './entity-tile.component.html',
  styleUrl: './entity-tile.component.scss',
})
export class EntityTileComponent<T extends Entity<T>> {
  campaign = input<Campaign>();
  entity = input<T>();
  type = input<DialogType>();
  image = input(true);
  cover = input(false);
  selector = input<(entity: T) => void>();

  constructor(private readonly dialogs: Dialogs) {}

  onClick() {
    if (this.entity() && this.type()) {
      this.dialogs.open(this.type()!, this.entity()!.name, this.entity(), this.campaign(), this.selector());
    }
  }
}
