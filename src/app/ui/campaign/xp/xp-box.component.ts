import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren, computed, input } from '@angular/core';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Utils } from '../../../../common/utils';
import { Monster } from '../../../data/entities/monster';
import { Character } from '../../../data/facts/character';
import { CountedValue } from '../../../data/wrappers';
import { Xp } from '../../../rules/xp';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';

const VALIDATE = /^(?:(\d+)\s*x)?\s*(\d+)\s*$/;

@Component({
  selector: 'xp-box',
  standalone: true,
  imports: [
    CommonModule,
    ExpandingBoxComponent,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  templateUrl: './xp-box.component.html',
  styleUrl: './xp-box.component.scss',
})
export class XpBoxComponent {
  characters = input<Character[]>([]);
  encounterMonsters = input<CountedValue<Monster>[]>([]);

  @ViewChildren('monster') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  easy = computed(() => Utils.sum(this.characters().map((c) => Xp.easy(c.levels().length))));
  medium = computed(() => Utils.sum(this.characters().map((c) => Xp.medium(c.levels().length))));
  hard = computed(() => Utils.sum(this.characters().map((c) => Xp.hard(c.levels().length))));
  deadly = computed(() => Utils.sum(this.characters().map((c) => Xp.deadly(c.levels().length))));
  partyAverageXp = computed(() => Utils.average(this.characters().map((c) => Monster.xpPerLevel(c.levels().length))));

  xps: number[] = [];
  counts: number[] = [];
  difficultyMultiplier = 1;
  totalXp = 0;
  totalAdjustedXp = 0;
  xpPerCharacter = 0;
  category = '';

  selectedMonsters: CountedValue<Monster>[] = [];
  monsters: FormControl<string | null>[] = [XpBoxComponent.createControl()];

  constructor() {}

  onLeave(index: number) {
    if (index == this.monsters.length - 1 && this.monsters[index].value) {
      this.monsters.push(XpBoxComponent.createControl());
      // Set focus in the next cyle, after the new form control has been added.
      setTimeout(() => {
        this.inputs.last.nativeElement.focus();
      });
    }
  }

  onChange(index: number) {
    const match = this.monsters[index].value?.match(VALIDATE);
    if (match) {
      this.xps[index] = Number(match[2]);
      this.counts[index] = Number(match[1] || 1);
    } else {
      this.xps[index] = 0;
      this.counts[index] = 0;
    }

    this.updateTotal();
  }

  onToggle(change: MatButtonToggleChange) {
    this.selectedMonsters = change.value;
    this.updateTotal();
  }

  private updateTotal() {
    const selectedXps = this.selectedMonsters.map((m) => m.value.xp);
    const selectedCounts = this.selectedMonsters.map((m) => m.count);
    this.totalXp =
      Utils.sum(this.xps.map((x, i) => x * this.counts[i])) +
      Utils.sum(selectedXps.map((x, i) => x * selectedCounts[i]));
    this.difficultyMultiplier = Xp.multiplier(
      this.computeMonsterCount(
        [...this.xps, ...selectedXps],
        [...this.counts, ...selectedCounts],
        this.partyAverageXp(),
      ),
      this.characters.length,
    );
    this.totalAdjustedXp = this.totalXp * this.difficultyMultiplier;

    this.xpPerCharacter = Math.floor(this.totalXp / this.characters.length);

    if (this.totalXp <= this.easy()) {
      this.category = 'easy';
    } else if (this.totalXp <= this.medium()) {
      this.category = 'medium';
    } else if (this.totalXp <= this.hard()) {
      this.category = 'hard';
    } else {
      this.category = 'deadly';
    }
  }

  private computeMonsterCount(xps: number[], counts: number[], partyAverageXp: number): number {
    const maxXp = Math.max(...xps, partyAverageXp);

    // Ignore monsters that are less than a quarter of the max xp.
    return Math.max(
      counts.filter((c, i) => xps[i] > maxXp / 4).reduce((a, b) => a + b, 0),
      1,
    );
  }

  private static createControl(): FormControl<string | null> {
    return new FormControl<string>('', [validateMonster]);
  }
}

function validateMonster(control: AbstractControl): ValidationErrors | null {
  if (control.value && !control.value.match(VALIDATE)) {
    return { invalid: control.value };
  }

  return null;
}
