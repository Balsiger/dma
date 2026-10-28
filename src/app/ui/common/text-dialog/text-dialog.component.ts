import { Component, ElementRef, Inject, signal, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface EditData {
  title: string;
}

@Component({
  selector: 'text-dialog',
  styleUrl: './text-dialog.component.scss',
  templateUrl: './text-dialog.component.html',
  imports: [DialogComponent],
})
export class TextDialogComponent {
  @ViewChild('text') text!: ElementRef<HTMLTextAreaElement>;

  title = signal('');

  constructor(
    private readonly ref: MatDialogRef<TextDialogComponent, string>,
    @Inject(MAT_DIALOG_DATA) readonly data: EditData,
  ) {
    this.title.set(data.title);
  }

  onCancel() {
    this.ref.close();
  }

  onSave() {
    this.ref.close(this.text.nativeElement.value);
  }
}
