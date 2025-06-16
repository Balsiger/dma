import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Utils } from '../../../common/utils';
import { Spell } from '../../data/entities/spell';
import { SpellClass } from '../../data/entities/values/enums/spell-class';
import { Version } from '../../data/entities/values/enums/version';
import { EntitiesService } from '../../services/entity/entities.service';
import { SpellCardComponent } from './spell-card.component';

const CARDS_PER_PAGE = 9;

@Component({
  selector: 'spell-cards',
  imports: [SpellCardComponent, MatCheckboxModule, FormsModule],
  templateUrl: './spell-cards.component.html',
  styleUrl: './spell-cards.component.scss',
})
export class SpellCardsComponent {
  private spells: Spell[] = [];
  pages: Spell[][] = [];
  cantrip = model(false);
  level1 = model(false);
  level2 = model(false);
  level3 = model(false);
  level4 = model(false);
  level5 = model(false);
  level6 = model(false);
  level7 = model(false);
  level8 = model(false);
  level9 = model(false);
  bard = model(false);
  cleric = model(false);
  druid = model(false);
  paladin = model(false);
  ranger = model(false);
  sorcerer = model(false);
  warlock = model(false);
  wizard = model(false);

  constructor(readonly entitiesService: EntitiesService) {
    this.init();
  }

  private async init() {
    await this.entitiesService.ensureLoaded();
    this.spells = this.entitiesService.spells.getAllByVersion(Version.DND_5_24);

    this.filter();
  }

  private filter() {
    this.pages = Utils.paginate(
      this.spells.filter((s) => this.inFilter(s)),
      CARDS_PER_PAGE,
    );
  }

  onFilter() {
    this.filter();
  }

  private inFilter(spell: Spell): boolean {
    return this.inClass(spell) && this.levelEnabled(spell.level);
  }

  private inClass(spell: Spell): boolean {
    for (const spellClass of spell.classes) {
      if (this.classEnabled(spellClass)) {
        return true;
      }
    }

    return false;
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
