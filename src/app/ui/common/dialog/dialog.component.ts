import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dma-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title: string = '';
  @Input() valid: boolean = false;

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
