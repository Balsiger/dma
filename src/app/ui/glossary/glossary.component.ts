import { Component, forwardRef, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlossaryType } from '../../data/entities/values/enums/glossary_type';
import { Campaign } from '../../data/facts/campaign';
import { Glossary } from '../../data/facts/glossary';
import { ReferenceComponent } from '../common/reference/reference.component';
import { EntityComponent } from '../entities/entity.component';
import { FormatterPipe } from '../pipes/formatter.pipe';
import { GlossaryDialogComponent } from './glossary-dialog.component';

@Component({
    selector: 'glossary',
    templateUrl: './glossary.component.html',
    styleUrls: ['./glossary.component.scss'],
    imports: [forwardRef(() => EntityComponent), FormatterPipe, ReferenceComponent]
})
export class GlossaryComponent {
  GlossaryType = GlossaryType;

  glossary = input.required<Glossary>();
  campaign = input<Campaign>();
  overview = input(true);
  collapsed = input(true);

  expand = output<void>();
  collapse = output<void>();

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    this.dialog.open(GlossaryDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        glossary: this.glossary(),
        campaign: this.campaign(),
      },
    });
  }
}
