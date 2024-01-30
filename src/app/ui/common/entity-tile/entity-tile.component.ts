import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Entity } from '../../../data/entities/entity';
import { DialogType, Dialogs } from '../dialogs';

@Component({
  selector: 'entity-tile',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './entity-tile.component.html',
  styleUrl: './entity-tile.component.scss'
})
export class EntityTileComponent<T extends Entity<T>> {
  @Input() entity?: T;
  @Input() type?: DialogType;
  @Input() image = true;

  constructor(private readonly dialogs: Dialogs) {    
  }

  onClick() {
    if (this.entity && this.type) {
      this.dialogs.open(this.type, this.entity.name, this.entity);
    }
  }
}
