import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../../data/entities/spell';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../../services/entity/entities.service';
import { EntityDetailsComponent } from '../entities/entity-details.component';
import { SpellCardComponent } from './spell-card.component';
import { SpellComponent } from './spell.component';

export interface Data {
  spell: Spell;
  campaign?: Campaign;
}

@Component({
  selector: 'spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.scss'],
  imports: [SpellComponent, EntityDetailsComponent, SpellCardComponent],
})
export class SpellDialogComponent {
  Version = Version;

  readonly spell: Spell;
  readonly campaign?: Campaign;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Data,
    changeDetector: ChangeDetectorRef,
    readonly entitiesService: EntitiesService,
  ) {
    this.spell = data.spell;
    this.campaign = data.campaign;

    // For some reason, sometimes change detection does not run and the dialog takes a very long time to render.
    setTimeout(() => changeDetector.detectChanges());
  }
}
