import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'dma-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    imports: [MatButtonModule]
})
export class DialogComponent {
  title = input('');
  valid = input(false);
  labelCancel = input('Cancel');
  labelSave = input('Save');
  buttons = input(true);

  cancel = output<void>();
  save = output<void>();

  constructor() {}

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }
}
