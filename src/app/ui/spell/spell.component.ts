import { Component, forwardRef, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Spell } from '../../data/entities/spell';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { LabeledTextComponent } from '../common/labeled-text/labeled-text.component';
import { LinkComponent } from '../common/link/link.component';
import { TaperComponent } from '../common/taper/taper.component';
import { EntityComponent } from '../entities/entity.component';
import { ListPipe } from '../pipes/list.pipe';
import { SpellDialogComponent } from './spell-dialog.component';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
  imports: [
    forwardRef(() => EntityComponent),
    LabeledTextComponent,
    LinkComponent,
    TaperComponent,
    FormattedTextComponent,
    ListPipe,
  ],
})
export class SpellComponent {
  campaign = input<Campaign | undefined>();
  spell = input.required<Spell>();
  overview = input(true);
  collapsed = model(true);

  Version = Version;

  constructor(private readonly dialog: MatDialog) {}

  onFull() {
    console.log('full', this.spell());

    this.dialog.open(SpellDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: { spell: this.spell(), campaign: this.campaign() },
    });
  }
}
