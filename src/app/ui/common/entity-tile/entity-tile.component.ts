import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Entity } from '../../../data/entities/entity';
import { Campaign } from '../../../data/things/campaign';
import { DialogType, Dialogs } from '../dialogs';

@Component({
  selector: 'entity-tile',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './entity-tile.component.html',
  styleUrl: './entity-tile.component.scss',
})
export class EntityTileComponent<T extends Entity<T>> {
  @Input() campaign?: Campaign;
  @Input() entity?: T;
  @Input() type?: DialogType;
  @Input() image = true;
  @Input() selector?: (entity: T) => void;

  constructor(private readonly dialogs: Dialogs) {}

  onClick() {
    console.log('~~click', this.entity?.name);
    if (this.entity && this.type) {
      this.dialogs.open(this.type, this.entity.name, this.entity, this.campaign, this.selector);
    }
  }
}
