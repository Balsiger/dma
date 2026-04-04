import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, effect, ElementRef, input, output, viewChildren } from '@angular/core';
import { NPC } from '../../../data/combined/npc';
import { Monster } from '../../../data/entities/monster';
import { Parametrized } from '../../../data/entities/parametrized';
import { NPCState } from '../../../data/facts/npc-fact';
import { LabelType, Link } from '../../../data/values/link';
import { EncounterMonsterChipComponent } from './encounter-monster-chip.component';

export class Creature {
  x = 0;
  y = 0;
  hpState = this.determineHpState();
  hpFill = this.determineHpFill();

  constructor(
    readonly name: string,
    readonly image: string,
    public state: NPCState,
    public hp?: number,
    public maxHp?: number,
    readonly local?: boolean,
  ) {}

  update(other: Creature) {
    if (this.name === other.name) {
      if (this.local) {
        this.state = other.state;
        this.hp = other.hp;
        this.maxHp = other.maxHp;
        this.hpState = this.determineHpState();
        this.hpFill = this.determineHpFill();
      }

      this.x = other.x;
      this.y = other.y;
    } else {
      console.warn('Cannot update creature with a different name', this.name);
    }
  }

  updateHp(diff: any) {
    this.hp = (this.hp ?? 0) + diff;
    if (this.hp) {
      this.state = this.hp <= 0 ? NPCState.dead : NPCState.alive;
      this.hpState = this.determineHpState();
      this.hpFill = this.determineHpFill();
    }
  }

  private determineHpState(): string {
    if (!this.hp || !this.maxHp) {
      return '';
    }

    if (this.hp / this.maxHp > 0.5) {
      return 'well';
    }

    if (this.hp / this.maxHp > 0.25) {
      return 'bloodied';
    }

    return 'critical';
  }

  private determineHpFill(): string {
    if (!this.hp || !this.maxHp) {
      return '100%';
    }

    return `${(100 * this.hp) / this.maxHp}%`;
  }

  static fromNPC(npc: NPC): Creature {
    return new Creature(npc.name, Creature.portraitImage(npc.images), npc.state(), npc.hp(), npc.maxHp(), false);
  }

  static fromParametrizedMonster(monster: Parametrized<Monster>): Creature[] {
    const creatures: Creature[] = [];
    for (let i = 0; i < monster.count; i++) {
      creatures.push(Creature.fromMonster(monster.entity));
    }
    return creatures;
  }

  static fromMonster(monster: Monster): Creature {
    const hp = monster.hitDice.roll();
    return new Creature(monster.name, Creature.portraitImage(monster.images), NPCState.alive, hp, hp, true);
  }

  private static portraitImage(images: Link[]): string {
    return images.find((i) => i.label === LabelType.portrait)?.url ?? images[0]?.url ?? '';
  }
}

@Component({
  selector: 'encounter-monster-canvas',
  imports: [EncounterMonsterChipComponent, CdkDrag, CdkDropList, CdkDragPlaceholder],
  templateUrl: './encounter-monster-canvas.component.html',
  styleUrl: './encounter-monster-canvas.component.scss',
})
export class EncounterMonsterCanvasComponent {
  creatures = input<Creature[]>([]);
  selected = output<Creature>();
  hpDiff = output<{ creature: Creature; diff: number }>();
  changed = output<void>();

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
    this.selected.emit(creature);
  }

  onHpDiff(creature: Creature, diff: number) {
    if (!creature.local) {
      this.hpDiff.emit({ creature, diff });
    }
    this.changed.emit();
  }

  onDragMouse(event: MouseEvent) {
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

  private updateCreature(event: CdkDragDrop<Creature[]>) {
    const creature = event.item.data;
    const rectangle = event.container.element.nativeElement.getBoundingClientRect();
    if (event.container.data === this.mapCreatures) {
      creature.x = event.dropPoint.x - rectangle.left - this.offsetX;
      creature.y = event.dropPoint.y - rectangle.top - this.offsetY;
    } else {
      creature.x = 0;
      creature.y = 0;
    }

    // Somehow some of these settings get lost for some reason. Also note that event.item.element potentially points
    // to an invalid element, using a different element in the previous container.
    this.children().forEach((c, i) => {
      c.nativeElement.style.position = 'absolute';
      c.nativeElement.style.top = `${this.mapCreatures[i].y}px`;
      c.nativeElement.style.left = `${this.mapCreatures[i].x}px`;
    });

    this.changed.emit();
  }
}
