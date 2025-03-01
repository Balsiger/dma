import { Component, computed, input } from '@angular/core';
import { Version } from '../../../data/entities/values/enums/version';
import { Versioning } from '../../../rules/versions';

@Component({
  standalone: true,
  selector: 'labeled-text',
  templateUrl: './labeled-text.component.html',
  styleUrls: ['./labeled-text.component.scss'],
  imports: [],
})
export class LabeledTextComponent {
  label = input('');
  condition = input(true);
  version = input<Version>(Version.DND_5);
  versionedLabel = computed(() => Versioning.getLabel(this.label(), this.version()));

  constructor() {}
}
