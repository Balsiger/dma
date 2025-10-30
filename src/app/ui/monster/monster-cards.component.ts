import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { Monster } from '../../data/entities/monster';
import { EntitiesService } from '../../services/entity/entities.service';
import { MonsterCardComponent } from './monster-card.component';

@Component({
  selector: 'monster-cards',
  imports: [forwardRef(() => MonsterCardComponent)],
  templateUrl: './monster-cards.component.html',
  styleUrl: './monster-cards.component.scss',
})
export class MonsterCardsComponent {
  pMonsters = input.required<string | undefined>();
  monsters = computed(() => (this.loaded() ? this.resolveMonsters(this.pMonsters()?.trim().split(/,s*/) ?? []) : []));
  loaded = signal(false);

  constructor(private readonly entitiesService: EntitiesService) {
    this.load();
  }

  private async load() {
    await this.entitiesService.ensureLoaded();
    this.loaded.set(true);
  }

  private resolveMonsters(names: string[]): Monster[] {
    return names.map((n) => this.entitiesService.monsters.get(n));
  }
}
