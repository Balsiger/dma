import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'dma-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    standalone: true,
    imports: [NgIf, MatButtonModule],
})
export class DialogComponent {
  @Input() title: string = '';
  @Input() valid: boolean = false;
  @Input() labelCancel = 'Cancel';
  @Input() labelSave = 'Save';
  @Input() buttons = true;

  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  constructor() {}

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }
}
