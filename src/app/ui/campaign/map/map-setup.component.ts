import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, ViewChild, computed, effect, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../../../common/utils';
import { BattleMap } from '../../../data/entities/battle_map';
import { Campaign } from '../../../data/facts/campaign';
import { MapsService } from '../../../services/entity/maps.service';

const MAP_NAME = 'DMA-MAP';
const TV_WIDTH_PX = 1920;
const TV_HEIGHT_PX = 1080;
const TV_WIDTH_CM = 105;
const TV_HEIGHT_CM = 60;
export const TV_PX_PER_SQUARE = Math.floor((TV_WIDTH_PX / TV_WIDTH_CM) * 2.5 + (TV_HEIGHT_PX / TV_HEIGHT_CM) * 2.5) / 2;

const SCREEN_SCALE = 0.25;

interface Layer {
  name: string;
  path: string;
  selected: boolean;
  shown: boolean;
}

@Component({
  selector: 'map-setup',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CdkDrag],
  templateUrl: './map-setup.component.html',
  styleUrl: './map-setup.component.scss',
})
export class MapSetupComponent implements AfterViewInit {
  campaign = input<Campaign>();

  @ViewChild('current') currentEl!: ElementRef<HTMLImageElement>;
  @ViewChild('tv') tvEl!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;

  map = signal<BattleMap | undefined>(undefined);
  layers = computed(
    () =>
      this.map()?.layers.map((l) => ({
        name: l,
        path: this.map()?.makeLayer(l) || '',
        selected:
          (this.campaign()
            ?.map()
            .layers()
            .indexOf(this.map()?.makeLayer(l) || '') || 0) >= 0,
        shown:
          (this.campaign()
            ?.map()
            .layers()
            .indexOf(this.map()?.makeLayer(l) || '') || 0) >= 0,
      })) || [],
  );
  visibleLayers = computed(() => this.layers()?.filter((l) => l.selected || l.shown));
  incrementX = computed(() => (this.tvWidth - this.width()) / 2);
  incrementY = computed(() => (this.tvHeight - this.height()) / 2);
  width = computed(() => (this.map()?.width || 100) * SCREEN_SCALE * this.imageScale());
  height = computed(() => (this.map()?.height || 100) * SCREEN_SCALE * this.imageScale());
  rotation = computed(() => {
    return this.campaign()?.map().rotation() || 0;
  });
  x = computed(() => (this.campaign()?.map()?.x() || 0) * SCREEN_SCALE);
  y = computed(() => (this.campaign()?.map()?.y() || 0) * SCREEN_SCALE);

  private imageScale = computed(() => TV_PX_PER_SQUARE / (this.map()?.pxPerSquare || 1));

  position = { x: 0, y: 0 };
  previewLayers = new Set<string>();
  tvWidth = MapSetupComponent.scale(TV_WIDTH_PX, SCREEN_SCALE);
  tvHeight = MapSetupComponent.scale(TV_HEIGHT_PX, SCREEN_SCALE);

  constructor(private readonly mapService: MapsService) {
    effect(async () => {
      if (this.campaign()) {
        this.map.set(await this.mapService.get(Utils.last(this.campaign()!.map().name(), '/')));
      }
    });
  }

  ngAfterViewInit() {
    this.tvEl.nativeElement.style.width = this.tvWidth + 'px';
    this.tvEl.nativeElement.style.height = this.tvHeight + 'px';
    this.canvasEl.nativeElement.style.height = this.tvHeight + 400 + 'px';
    this.canvasEl.nativeElement.style.width = this.tvWidth + 400 + 'px';
  }

  onScreen() {
    if (this.campaign) {
      window.open('/map/' + this.campaign.name, MAP_NAME);
    }
  }

  onDragEnd(event: CdkDragEnd) {
    this.move(event.distance.x, event.distance.y);
  }

  private move(x: number, y: number) {
    this.campaign()?.setMapPosition(x / SCREEN_SCALE, y / SCREEN_SCALE);
  }

  onPosition(left: 1 | 0 | -1, top: 1 | 0 | -1) {
    const targetX = left * this.incrementX();
    const targetY = top * this.incrementY();

    this.move(targetX - this.position.x, targetY - this.position.y);
  }

  onRotate(rotate: 1 | -1) {
    //this.rotation = (this.rotation + rotate * 90) % 360;

    this.campaign()?.setMapRotation((this.rotation() + rotate * 90) % 360);
  }

  onClearLayers() {
    this.previewLayers.clear();
    this.campaign()?.setMapLayers([]);
  }

  onLayerPreview(layer: Layer) {
    if (this.previewLayers.has(layer.name)) {
      this.previewLayers.delete(layer.name);
      layer.shown = false;

      this.campaign()?.setMapLayers(
        this.layers()
          .filter((l) => l.shown)
          .map((l) => l.path),
      );
    } else {
      this.previewLayers.add(layer.name);
    }
  }

  onLayerShow(layer: Layer) {
    layer.shown = !layer.shown;
    if (layer.shown) {
      this.previewLayers.add(layer.name);
    } else {
      this.previewLayers.delete(layer.name);
    }

    this.campaign()?.setMapLayers(
      this.layers()
        .filter((l) => l.shown)
        .map((l) => l.path),
    );
  }

  getRotation(): number {
    return this.rotation();
  }

  formatPosition(): string {
    return `(${this.position.x / SCREEN_SCALE}, ${this.position.y / SCREEN_SCALE})`;
  }

  private static scale(pixels: number, scale: number): number {
    return Math.round(pixels * scale);
  }
}
