import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Character } from '../../../data/things/character';
import { Xp } from '../../../rules/xp';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';

const VALIDATE = /^(?:(\d+)\s*x)?\s*(\d+)\s*$/;

@Component({
  selector: 'xp-box',
  standalone: true,
  imports: [CommonModule, ExpandingBoxComponent, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './xp-box.component.html',
  styleUrl: './xp-box.component.scss',
})
export class XpBoxComponent {
  @Input() characters: Character[] = [];
  @ViewChildren('monster') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  easy: number = 0;
  medium: number = 0;
  hard: number = 0;
  deadly: number = 0;

  xps: number[] = [];
  adjustedXps: number[] = [];
  totalXp = 0;
  totalAdjustedXp = 0;
  xpPerCharacter = 0;
  category = '';

  monsters: FormControl<string | null>[] = [XpBoxComponent.createControl()];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['characters']) {
      this.easy = this.characters.map((c) => Xp.easy(c.levels.length)).reduce((s, a) => s + a, 0);
      this.medium = this.characters.map((c) => Xp.medium(c.levels.length)).reduce((s, a) => s + a, 0);
      this.hard = this.characters.map((c) => Xp.hard(c.levels.length)).reduce((s, a) => s + a, 0);
      this.deadly = this.characters.map((c) => Xp.deadly(c.levels.length)).reduce((s, a) => s + a, 0);
    }
  }

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
      const count = Number(match[1] || 1);
      const xp = Number(match[2]);
      this.xps[index] = count * xp;
      this.adjustedXps[index] = this.xps[index] * Xp.multiplier(count, this.characters.length);
    } else {
      this.xps[index] = 0;
      this.adjustedXps[index] = 0;
    }

    this.updateTotal();
  }

  private updateTotal() {
    this.totalXp = this.xps.reduce((a, b) => a + b, 0);
    this.totalAdjustedXp = this.adjustedXps.reduce((a, b) => a + b, 0);
    this.xpPerCharacter = Math.floor(this.totalXp / this.characters.length);

    if (this.totalXp <= this.easy) {
      this.category = 'easy';
    } else if (this.totalXp <= this.medium) {
      this.category = 'medium';
    } else if (this.totalXp <= this.hard) {
      this.category = 'hard';
    } else {
      this.category = 'deadly';
    }
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
