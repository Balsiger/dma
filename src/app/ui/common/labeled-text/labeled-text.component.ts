import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { Version } from '../../../data/entities/immutable/values/enums/version';
import { Versioning } from '../../../rules/versions';

@Component({
  selector: 'labeled-text',
  templateUrl: './labeled-text.component.html',
  styleUrls: ['./labeled-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class LabeledTextComponent {
  label = input('');
  condition = input(true);
  version = input<Version>(Version.DND_5);
  versionedLabel = computed(() => Versioning.getLabel(this.label(), this.version()));

  constructor() {}
}
