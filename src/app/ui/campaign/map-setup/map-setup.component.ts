import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, Input, ViewChild, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImageMap } from '../../../data/image_map';
import { Campaign } from '../../../data/things/campaign';
import { MapsService } from '../../../services/maps.service';

const SCREEN_NAME = 'DMA-SCREEN';
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
  @Input() campaign?: Campaign;

  @ViewChild('current') currentEl!: ElementRef<HTMLImageElement>;
  @ViewChild('tv') tvEl!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;

  map?: ImageMap;
  layers: Layer[] = [];
  visibleLayers = new Set<Layer>();
  position = { x: 0, y: 0 };
  scale = 1;
  rotation = 0;
  incrementX = 0;
  incrementY = 0;

  tvWidth = MapSetupComponent.scale(TV_WIDTH_PX, SCREEN_SCALE);
  tvHeight = MapSetupComponent.scale(TV_HEIGHT_PX, SCREEN_SCALE);

  constructor(private readonly mapService: MapsService) {
    effect(async () => {
      if (this.campaign) {
        this.map = await this.mapService.getMap(this.campaign.map$());

        if (this.map) {
          const layers = this.campaign.mapLayers;
          const imageScale = TV_PX_PER_SQUARE / this.map.pxPerSquare;

          const width = this.map.width * SCREEN_SCALE * imageScale;
          const height = this.map.height * SCREEN_SCALE * imageScale;

          this.incrementX = (this.tvWidth - width) / 2;
          this.incrementY = (this.tvHeight - height) / 2;
          this.currentEl.nativeElement.style.width = width + 'px';
          this.currentEl.nativeElement.style.height = height + 'px';
          this.currentEl.nativeElement.style.left = this.incrementX + 200 + 'px';
          this.currentEl.nativeElement.style.top = this.incrementY + 200 + 'px';
          this.tvEl.nativeElement.style.backgroundColor = this.map.background;
          this.scale = 1 / SCREEN_SCALE;
          this.rotation = this.campaign.mapRotation;
          this.position = {
            x: this.campaign.mapPosition[0] / this.scale,
            y: this.campaign.mapPosition[1] / this.scale,
          };
          this.layers = this.map.layers.map((l) => {
            return {
              name: l,
              path: this.map!.makeLayer(l),
              selected: layers.indexOf(this.map!.makeLayer(l)) >= 0,
              shown: layers.indexOf(this.map!.makeLayer(l)) >= 0,
            };
          });

          for (const layer of this.layers) {
            if (layer.selected || layer.shown) {
              this.visibleLayers.add(layer);
            }
          }
        }
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
    this.position = { x: this.position.x + x, y: this.position.y + y };
    this.campaign?.setMapPosition(this.position.x * this.scale, this.position.y * this.scale);
  }

  onPosition(left: 1 | 0 | -1, top: 1 | 0 | -1) {
    const targetX = left * this.incrementX;
    const targetY = top * this.incrementY;

    this.move(targetX - this.position.x, targetY - this.position.y);
  }

  onRotate(rotate: 1 | -1) {
    this.rotation = (this.rotation + rotate * 90) % 360;

    this.campaign?.setMapRotation(this.rotation);
  }

  onClearLayers() {
    this.visibleLayers.clear();

    for (const layer of this.layers) {
      layer.selected = false;
      layer.shown = false;

      this.campaign?.setMapLayers(this.layers.filter((l) => l.shown).map((l) => l.path));
    }
  }

  onLayerPreview(layer: Layer) {
    layer.selected = !layer.selected;

    if (!layer.selected) {
      layer.shown = false;
    }

    if (layer.selected || layer.shown) {
      this.visibleLayers.add(layer);
    } else {
      this.visibleLayers.delete(layer);
    }
  }

  onLayerShow(layer: Layer) {
    layer.shown = !layer.shown;
    layer.selected = layer.shown;

    if (layer.selected || layer.shown) {
      this.visibleLayers.add(layer);
    } else {
      this.visibleLayers.delete(layer);
    }

    this.campaign?.setMapLayers(this.layers.filter((l) => l.shown).map((l) => l.path));
  }

  getRotation(): number {
    return this.rotation;
  }

  formatPosition(): string {
    return `(${this.position.x * this.scale}, ${this.position.y * this.scale})`;
  }

  private static scale(pixels: number, scale: number): number {
    return Math.round(pixels * scale);
  }
}
