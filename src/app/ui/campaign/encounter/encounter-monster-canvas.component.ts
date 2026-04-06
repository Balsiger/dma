import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, effect, ElementRef, input, output, viewChildren } from '@angular/core';
import { Creature, CreatureType } from '../../../data/local/creature';
import { CreatureChipComponent } from './creature-chip.component';

@Component({
  selector: 'encounter-monster-canvas',
  imports: [CreatureChipComponent, CdkDrag, CdkDropList, CdkDragPlaceholder],
  templateUrl: './encounter-monster-canvas.component.html',
  styleUrl: './encounter-monster-canvas.component.scss',
})
export class EncounterMonsterCanvasComponent {
  creatures = input<Creature[]>([]);
  selected = output<Creature>();
  hpDiff = output<{ creature: Creature; diff: number }>();

  chipCreatures: Creature[] = [];
  mapCreatures: Creature[] = [];

  children = viewChildren('mapCreature', { read: ElementRef });

  private offsetX = 0;
  private offsetY = 0;

  constructor() {
    effect(() => {
      this.chipCreatures = this.creatures().filter((c) => !c.x && !c.y);
      this.mapCreatures = this.creatures().filter((c) => !!c.x || !!c.y);
    });
  }

  onDrop(event: CdkDragDrop<Creature[]>) {
    if (event.previousContainer === event.container) {
      if (event.previousContainer.data === this.chipCreatures) {
        // Only move within the chips, not the map.
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        this.updateCreature(event);
      }
    } else {
      this.updateCreature(event);
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  onSelect(creature: Creature) {
    if (creature.type !== CreatureType.character) {
      this.selected.emit(creature);
    }
  }

  onHpDiff(creature: Creature, diff: number) {
    this.hpDiff.emit({ creature, diff });
  }

  onDragMouse(event: MouseEvent) {
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

  private updateCreature(event: CdkDragDrop<Creature[]>) {
    const creature = event.item.data;
    const rectangle = event.container.element.nativeElement.getBoundingClientRect();
    if (event.container.data === this.mapCreatures) {
      creature.setPosition(
        event.dropPoint.x - rectangle.left - this.offsetX,
        event.dropPoint.y - rectangle.top - this.offsetY,
      );
    } else {
      creature.clearPosition();
    }

    // Somehow some of these settings get lost for some reason. Also note that event.item.element potentially points
    // to an invalid element, using a different element in the previous container.
    this.children().forEach((c, i) => {
      c.nativeElement.style.position = 'absolute';
      c.nativeElement.style.top = `${this.mapCreatures[i].y}px`;
      c.nativeElement.style.left = `${this.mapCreatures[i].x}px`;
    });
  }
}
