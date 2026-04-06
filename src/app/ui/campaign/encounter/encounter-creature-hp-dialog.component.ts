import { AfterViewInit, Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Creature } from '../../../data/local/creature';
import { DialogComponent } from '../../common/dialog/dialog.component';

@Component({
  selector: 'encounter-creature-hp-dialog',
  imports: [DialogComponent, MatInputModule, ReactiveFormsModule],
  templateUrl: './encounter-creature-hp-dialog.component.html',
  styleUrl: './encounter-creature-hp-dialog.component.scss',
})
export class EncounterCreatureHpDialogComponent implements AfterViewInit {
  readonly creature: Creature;
  readonly add = new FormControl<number | null>(null);
  readonly remove = new FormControl<number | null>(null);
  readonly first = viewChild('first', { read: ElementRef });

  constructor(
    private readonly ref: MatDialogRef<EncounterCreatureHpDialogComponent, number>,
    @Inject(MAT_DIALOG_DATA) data: Creature,
  ) {
    this.creature = data;
  }

  ngAfterViewInit(): void {
    // Prevent changing a value while rendering.
    setTimeout(() => {
      this.first()?.nativeElement.focus();
    });
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    const diff = (this.add.value ?? 0) - (this.remove.value ?? 0);
    this.ref.close(diff);
  }
}
