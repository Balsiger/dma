import { Component, forwardRef, input, model, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Reference } from '../../data/entities/values/reference';
import { Campaign } from '../../data/facts/campaign';
import { ReferenceComponent } from '../common/reference/reference.component';
import { TaperComponent } from '../common/taper/taper.component';
import { DialogType } from '../dialogs/dialogs';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
  imports: [MatIconModule, TaperComponent, forwardRef(() => ReferenceComponent), MatButtonModule],
})
export class EntityComponent {
  name = input('');
  reference = input<Reference>();
  type = input<DialogType>('monster');
  overview = input(true);
  baseType = input<DialogType>('item');
  bases = input<string[]>([]);
  campaign = input<Campaign>();
  count = input(1);
  found = input(true);
  version = input('5');
  print = input(false);

  collapsed = model(false);
  full = output<void>();

  onFull(event: Event) {
    this.full.emit();
    event.stopPropagation();
  }

  onCollapse(event: Event) {
    this.collapsed.set(true);
    event.stopPropagation();
  }

  onExpand(event: Event) {
    this.collapsed.set(false);
    event.stopPropagation();
  }

  onMaybeExpand(event: Event) {
    if (this.collapsed()) {
      this.onExpand(event);
    }
  }
}
