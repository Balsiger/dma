import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Spell } from '../../data/entities/spell';
import { SpellClass } from '../../data/entities/values/enums/spell-class';
import { EntitiesService } from '../../services/entity/entities.service';
import { SpellCardComponent } from './spell-card.component';

const CARDS_PER_PAGE = 16;

@Component({
  selector: 'spell-cards',
  imports: [SpellCardComponent, MatCheckboxModule, FormsModule],
  templateUrl: './spell-cards.component.html',
  styleUrl: './spell-cards.component.scss',
})
export class SpellCardsComponent {
  private spells: Spell[] = [];
  pages: Spell[][] = [];
  cantrip = model(true);
  level1 = model(true);
  level2 = model(true);
  level3 = model(true);
  level4 = model(true);
  level5 = model(true);
  level6 = model(true);
  level7 = model(true);
  level8 = model(true);
  level9 = model(true);
  bard = model(true);
  cleric = model(true);
  druid = model(true);
  paladin = model(true);
  ranger = model(true);
  sorcerer = model(true);
  warlock = model(true);
  wizard = model(true);

  constructor(readonly entitiesService: EntitiesService) {
    this.init();
  }

  private async init() {
    await this.entitiesService.ensureLoaded();
    this.spells = this.entitiesService.spells.getAll();

    this.filter();
  }

  private filter() {
    const spells = this.spells.filter((s) => this.inFilter(s));

    this.pages = [];
    for (let i = 0; i < spells.length; i += CARDS_PER_PAGE) {
      this.pages.push(spells.slice(i, i + CARDS_PER_PAGE));
    }
  }

  onFilter() {
    this.filter();
  }

  private inFilter(spell: Spell): boolean {
    for (const spellClass of spell.classes) {
      if (!this.classEnabled(spellClass)) {
        return false;
      }
    }

    return this.levelEnabled(spell.level);
  }

  private classEnabled(spellClass: SpellClass): boolean {
    switch (spellClass) {
      case SpellClass.BARD:
        return this.bard();

      case SpellClass.CLERIC:
        return this.cleric();

      case SpellClass.DRUID:
        return this.druid();

      case SpellClass.PALADIN:
        return this.paladin();

      case SpellClass.RANGER:
        return this.ranger();

      case SpellClass.SORCERER:
        return this.sorcerer();

      case SpellClass.WARLOCK:
        return this.warlock();

      case SpellClass.WIZARD:
        return this.wizard();

      default:
        return true;
    }
  }

  private levelEnabled(level: number): boolean {
    switch (level) {
      case 0:
        return this.cantrip();
      case 1:
        return this.level1();
      case 2:
        return this.level2();
      case 3:
        return this.level3();
      case 4:
        return this.level4();
      case 5:
        return this.level5();
      case 6:
        return this.level6();
      case 7:
        return this.level7();
      case 8:
        return this.level8();
      case 9:
        return this.level9();

      default:
        return true;
    }
  }
}
