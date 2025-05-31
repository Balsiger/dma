import { ChangeDetectorRef, Component, forwardRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../../data/facts/campaign';
import { Glossary } from '../../data/facts/glossary';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { GlossaryComponent } from './glossary.component';

export interface Data {
  glossary: Glossary;
  campaign?: Campaign;
}

@Component({
    selector: 'glossary-dialog',
    templateUrl: './glossary-dialog.component.html',
    styleUrls: ['./glossary-dialog.component.scss'],
    imports: [forwardRef(() => GlossaryComponent), ScreenImageButtonComponent, FormattedTextComponent]
})
export class GlossaryDialogComponent {
  readonly glossary: Glossary;
  readonly campaign?: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) data: Data, changeDetector: ChangeDetectorRef) {
    this.glossary = data.glossary;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
