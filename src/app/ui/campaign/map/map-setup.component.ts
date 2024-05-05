import { CdkDrag, CdkDragEnd, Point } from '@angular/cdk/drag-drop';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../../../common/utils';
import { BattleMap } from '../../../data/entities/battle-map';
import { Token } from '../../../data/entities/token';
import { Campaign } from '../../../data/facts/campaign';
import { TokenInfo } from '../../../data/facts/factoids/token-info';
import { MapsService } from '../../../services/entity/maps.service';
import { TokensService } from '../../../services/entity/tokens.service';

const MAP_NAME = 'DMA-MAP';
const TV_WIDTH_PX = 1920;
const TV_HEIGHT_PX = 1080;
const TV_WIDTH_CM = 105;
const TV_HEIGHT_CM = 60;
export const TV_PX_PER_SQUARE = Math.floor((TV_WIDTH_PX / TV_WIDTH_CM) * 2.5 + (TV_HEIGHT_PX / TV_HEIGHT_CM) * 2.5) / 2;

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
export class MapSetupComponent implements OnInit, AfterViewChecked {
  readonly SCREEN_SCALE = 0.4; //0.25;

  campaign = input<Campaign>();

  @ViewChild('tv') tvEl!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;
  @ViewChild('maps') mapsEl!: ElementRef<HTMLDivElement>;

  tokensByName: Map<string, Token> = new Map();
  tokens = computed(() => this.campaign()?.map().tokens());
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

  // The position relative to the tv element.
  x = computed(() => (this.campaign()?.map()?.x() || 0) * this.mapScale());
  y = computed(() => (this.campaign()?.map()?.y() || 0) * this.mapScale());

  // The width of the map in pixels displayed (scaled).
  width = computed(() => (this.map()?.width || 100) * this.mapScale());
  height = computed(() => (this.map()?.height || 100) * this.mapScale());

  // The width of the tv in pixels displayed (scaled).
  tvWidth = TV_WIDTH_PX * this.SCREEN_SCALE;
  tvHeight = TV_HEIGHT_PX * this.SCREEN_SCALE;

  // The increments to move when positioning the map on the left, right, top, etc. of the tv.
  incrementX = computed(() => (this.tvWidth - this.width()) / 2 / this.mapScale());
  incrementY = computed(() => (this.tvHeight - this.height()) / 2 / this.mapScale());

  // The number of pixels per map grid in displayed pixels (scaled).
  gridPx = computed(() => (this.map()?.pxPerSquare || 100) * this.mapScale());

  // The offset in displayed pixels between the grid and the origin of the tv.
  gridOffsetX = 0;
  gridOffsetY = 0;

  rotation = computed(() => {
    return this.campaign()?.map().rotation() || 0;
  });

  // The scaling factor from the map to the tv, inclusing the scaling of the tv.
  mapScale = computed(() => (TV_PX_PER_SQUARE / (this.map()?.pxPerSquare || 1)) * this.SCREEN_SCALE);

  position = { x: 0, y: 0 };
  previewLayers = new Set<string>();

  constructor(
    private readonly mapService: MapsService,
    private readonly tokenService: TokensService,
  ) {
    effect(async () => {
      if (this.campaign()) {
        this.map.set(await this.mapService.get(Utils.last(this.campaign()!.map().name(), '/')));
      }
    });
  }

  ngAfterViewChecked() {
    // The position of the maps element changes when the popup is opened.
    const bounds = this.mapsEl.nativeElement.getBoundingClientRect();
    this.gridOffsetX = bounds.left % this.gridPx();
    this.gridOffsetY = bounds.top % this.gridPx();
  }

  async ngOnInit() {
    this.tokensByName = new Map((await this.tokenService.getAll()).map((t) => [t.name, t]));
  }

  onScreen() {
    if (this.campaign()) {
      window.open('/map/' + this.campaign()!.name, MAP_NAME);
    }
  }

  onDragEnd(event: CdkDragEnd) {
    // The even distances is in image scale!
    this.move((this.x() + event.distance.x) / this.mapScale(), (this.y() + event.distance.y) / this.mapScale());
    // Need to reset the drag, as angular leaves some translate on the element.
    event.source._dragRef.reset();
  }

  constrainTokenDrag = this.constrainTokenDragFn.bind(this);

  constrainTokenDragFn(position: Point): Point {
    return this.roundToGrid(position);
  }

  private roundToGrid(point: Point): Point {
    return {
      x: Math.floor(point.x / this.gridPx()) * this.gridPx() + this.gridOffsetX,
      y: Math.floor(point.y / this.gridPx()) * this.gridPx() + this.gridOffsetY,
    };
  }

  private move(x: number, y: number) {
    this.campaign()?.setMapPosition(x, y);
  }

  onTokenDragEnd(token: TokenInfo, event: CdkDragEnd) {
    const tokenBounds = event.source.element.nativeElement.getBoundingClientRect();
    const mapBounds = this.mapsEl.nativeElement.getBoundingClientRect();
    const x = tokenBounds.left - mapBounds.left;
    const y = tokenBounds.top - mapBounds.top;
    this.campaign()?.updateMapToken(token, x / this.mapScale(), y / this.mapScale());

    // Need to reset the drag, as angular leaves some translate on the element.
    event.source._dragRef.reset();
  }

  onPosition(left: number, top: number) {
    const targetX = left * this.incrementX();
    const targetY = top * this.incrementY();

    this.move(targetX - this.position.x, targetY - this.position.y);
  }

  onRotate(rotate: 1 | -1) {
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
    return `(${Math.round(this.x() / this.mapScale())}, ${Math.round(this.y() / this.mapScale())})`;
  }
}
