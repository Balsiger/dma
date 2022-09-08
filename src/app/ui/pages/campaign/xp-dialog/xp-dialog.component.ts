import { Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../../../data/Campaign';
import { Xp } from '../../../../rules/xp';

const VALIDATE = /^(?:(\d+)\s*x)?\s*(\d+)\s*$/;

@Component({
  selector: 'xp-dialog',
  templateUrl: './xp-dialog.component.html',
  styleUrls: ['./xp-dialog.component.scss'],
})
export class XpDialogComponent {
  @ViewChildren('monster') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  readonly easy: number;
  readonly medium: number;
  readonly hard: number;
  readonly deadly: number;

  monsters: FormControl<string | null>[] = [XpDialogComponent.createControl()];
  xps: number[] = [];
  adjustedXps: number[] = [];
  totalXp = 0;
  totalAdjustedXp = 0;
  xpPerCharacter = 0;
  category = '';

  constructor(
    private readonly ref: MatDialogRef<XpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly campaign: Campaign
  ) {
    this.easy = this.campaign.characters.map((c) => Xp.easy(c.levels.length)).reduce((s, a) => s + a, 0);
    this.medium = this.campaign.characters.map((c) => Xp.medium(c.levels.length)).reduce((s, a) => s + a, 0);
    this.hard = this.campaign.characters.map((c) => Xp.hard(c.levels.length)).reduce((s, a) => s + a, 0);
    this.deadly = this.campaign.characters.map((c) => Xp.deadly(c.levels.length)).reduce((s, a) => s + a, 0);
  }

  private static createControl(): FormControl<string | null> {
    return new FormControl<string>('', [validateMonster]);
  }

  onLeave(index: number) {
    if (index == this.monsters.length - 1 && this.monsters[index].value) {
      this.monsters.push(XpDialogComponent.createControl());
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
      this.adjustedXps[index] = this.xps[index] * Xp.multiplier(count, this.campaign.characters.length);
    } else {
      this.xps[index] = 0;
      this.adjustedXps[index] = 0;
    }

    this.updateTotal();
  }

  private updateTotal() {
    this.totalXp = this.xps.reduce((a, b) => a + b, 0);
    this.totalAdjustedXp = this.adjustedXps.reduce((a, b) => a + b, 0);
    this.xpPerCharacter = Math.floor(this.totalXp / this.campaign.characters.length);

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
}

function validateMonster(control: AbstractControl): ValidationErrors | null {
  if (control.value && !control.value.match(VALIDATE)) {
    return { invalid: control.value };
  }

  return null;
}
