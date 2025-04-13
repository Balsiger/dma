import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleMap } from 'src/app/data/entities/battle-map';
import { Campaign } from '../../../data/facts/campaign';
import { Settings } from '../../../data/values/settings';
import { EntitiesService } from '../../../services/entity/entities.service';
import { CampaignService } from '../../../services/fact/campaign.service';
import { GridComponent } from '../../common/grid/grid.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [GridComponent],
})
export class MapComponent implements AfterViewInit {
  campaign = signal<Campaign | undefined>(undefined);
  maps = signal<Map<string, BattleMap>>(new Map());
  map = computed(() => {
    return this.maps()?.get(this.campaign()?.map().name() || '');
  });
  scale = computed(() => this.settings.tvPxPerSquare() / (this.map()?.pxPerSquare || 100));
  // Scaling is already included for tokens, we only need to adjust the px per sqaure from 100.
  tokenScale = computed(() => (this.map()?.pxPerSquare || 100) / 100);
  rotation = computed(() => this.campaign()?.map()?.rotation() || 0);
  tokens = computed(() => this.campaign()?.map()?.tokens() || []);
  left = computed(() => (this.campaign()?.map()?.x() || 0) * this.scale());
  top = computed(() => (this.campaign()?.map()?.y() || 0) * this.scale());
  gridPx = computed(() => (this.map()?.pxPerSquare || 100) * this.scale());
  campaignMap = computed(() => this.campaign()?.map());
  showGrid = computed(() => this.campaignMap()?.grid() || false);
  width = window.innerWidth;
  height = window.innerHeight;
  levels = computed(
    () =>
      this.map()?.levels.map((l) => ({
        base: l.base,
        path: this.map()?.makeLevel(l.base),
        mask: this.map()?.makeLevelMask(l.base),
        selected: this.campaign()?.map().level() === l.base,
        masks: l.masks.map((m) => ({
          name: m,
          path: this.map()?.makeMask(l.base, m) || '',
          preview: this.campaign()?.map()?.isPreview(l.base, m) || false,
          shown: this.campaign()?.map()?.isShown(l.base, m) || false,
        })),
        layers: l.layers.map((a) => ({
          name: a,
          path: this.map()?.makeLayer(l.base, a) || '',
          preview: this.campaign()?.map()?.isPreviewLayer(l.base, a) ?? false,
          shown: this.campaign()?.map().isShownLayer(l.base, a) ?? false,
        })),
      })),
  );
  currentLevel = computed(() => this.levels()?.find((l) => l.selected));
  imageMasks = computed(() =>
    this.currentLevel()?.masks?.length !== 0
      ? `url("/assets/maps/${this.currentLevel()?.mask}")` +
        this.currentLevel()
          ?.masks.filter((m) => m.shown)
          .map((m) => `,url("/assets/maps/${m.path}")`)
          .join('')
      : '',
  );

  constructor(
    private readonly entitiesService: EntitiesService,
    private readonly campaignService: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly settings: Settings,
  ) {}

  async ngAfterViewInit() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign.set(this.campaignService.get(campaignName));
    }

    await this.entitiesService.ensureLoaded();
    this.maps.set(new Map<string, BattleMap>(this.entitiesService.maps.getAll().map((m) => [m.fullName, m])));
  }
}
