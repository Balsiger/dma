import { Component, forwardRef, input } from '@angular/core';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Static } from '../../data/entities/static/static';
import { Version } from '../../data/entities/static/values/enums/version';
import { ScreenImageButtonComponent } from '../campaign/screen/screen-image-button.component';
import { FormattedTextComponent } from '../common/formatted-text/formatted-text.component';
import { Dialogs, DialogType } from '../dialogs/dialogs';

@Component({
  selector: 'entity-details',
  imports: [ScreenImageButtonComponent, forwardRef(() => FormattedTextComponent)],
  templateUrl: './entity-details.component.html',
  styleUrl: './entity-details.component.scss',
})
export class EntityDetailsComponent<T extends Static<T>> {
  Version = Version;

  campaign = input<Campaign | undefined>();
  versions = input<Version[]>([]);
  entity = input.required<Static<T>>();
  type = input.required<DialogType>();

  constructor(readonly dialogs: Dialogs) {}

  onVersion(version: Version) {
    this.dialogs.open(this.type(), this.entity().name, undefined, undefined, undefined, version);
  }
}
