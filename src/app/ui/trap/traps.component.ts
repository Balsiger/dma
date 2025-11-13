import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Trap } from '../../data/entities/trap';
import { TrapType } from '../../data/entities/values/enums/trap-type';
import { Version } from '../../data/entities/values/enums/version';
import { Campaign } from '../../data/facts/campaign';
import { EntitiesService } from '../../services/entity/entities.service';
import { Filter } from '../common/filtering-line/filtering-line.component';
import { EntitiesGridComponent } from '../entities/entities-grid.component';
import { PageTitleComponent } from '../pages/page-title.component';
import { PageComponent } from '../pages/page.component';

@Component({
  selector: 'traps',
  imports: [CommonModule, PageComponent, PageTitleComponent, EntitiesGridComponent],
  templateUrl: './traps.component.html',
  styleUrl: './traps.component.scss',
})
export class TrapsComponent {
  embed = input(false);
  campaign = input<Campaign>();

  traps: Trap[] = [];
  filters: Filter[] = [];

  constructor(private readonly entitiesService: EntitiesService) {
    this.load();
  }

  async load() {
    await this.entitiesService.ensureLoaded();

    this.traps = this.entitiesService.traps.getAllVersions();

    this.filters = [
      {
        label: 'Version',
        options: Version.versions.map((v) => ({ label: v.toString(), value: v })),
        default: Version.DND_5_24,
      },
      {
        label: 'Name',
      },
      {
        label: 'Type',
        options: TrapType.types.map((t) => ({ label: t.name, value: t })),
        multiple: true,
      },
    ];
  }
}
