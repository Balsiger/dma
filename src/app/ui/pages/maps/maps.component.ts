import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { BattleMap } from '../../../data/entities/battle_map';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { MapsService } from '../../../services/maps.service';
import { PageTitleComponent } from '../../common/page-title/page-title.component';

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
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  standalone: true,
  imports: [PageTitleComponent, NgFor, NgIf, MatButtonModule, MatTooltipModule, MatIconModule, CdkDrag],
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('current') currentEl!: ElementRef<HTMLImageElement>;
  @ViewChild('tv') tvEl!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;

  campaign?: Campaign = undefined;
  mapsByName = new Map<string, BattleMap>();
  maps: BattleMap[] = [];
  filteredMaps: BattleMap[] = [];
  selectedLocations: string[] = [];
  filteredLocations: string[] = [];
  currentMap?: BattleMap;
  currentLayers: Layer[] = [];
  window: Window | null = null;
  imagePosition = { x: 0, y: 0 };
  scale = 1;
  rotation = 0;
  incrementX = 0;
  incrementY = 0;

  TV_WIDTH = MapsComponent.scale(TV_WIDTH_PX, SCREEN_SCALE);
  TV_HEIGHT = MapsComponent.scale(TV_HEIGHT_PX, SCREEN_SCALE);

  constructor(
    private readonly mapService: MapsService,
    private readonly campaignService: CampaignsService,
    private readonly route: ActivatedRoute,
  ) {
    this.load();
  }

  ngAfterViewInit() {
    this.tvEl.nativeElement.style.width = this.TV_WIDTH + 'px';
    this.tvEl.nativeElement.style.height = this.TV_HEIGHT + 'px';
    this.canvasEl.nativeElement.style.height = this.TV_HEIGHT + 400 + 'px';
    this.canvasEl.nativeElement.style.width = this.TV_WIDTH + 400 + 'px';
  }

  private load() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = this.campaignService.getCampaign(campaignName);
    }
    this.campaign?.load().then(() => {
      this.mapService.getMaps().then((maps) => {
        this.mapsByName = maps;
        this.maps = Array.from(maps.values());

        this.selectedLocations = [];
        this.filteredLocations = this.extractLocations();

        if (this.campaign?.map) {
          this.selectedLocations = this.campaign?.map.split(/\//);
          this.selectedLocations.pop();
          this.filteredLocations = this.extractLocations();
          this.currentMap = this.mapsByName.get(this.campaign.map);
          this.showMap(this.campaign.mapLayers);

          if (this.campaign.mapPosition?.length === 2) {
            this.move(this.campaign.mapPosition[0] / this.scale, this.campaign.mapPosition[1] / this.scale);
          }
        }

        this.filteredMaps = this.determineMapsByLocations(this.maps);
      });
    });
  }

  private showMap(layers: string[] = []) {
    if (this.currentMap) {
      const imageScale = TV_PX_PER_SQUARE / this.currentMap.pxPerSquare;

      const width = this.currentMap.width * SCREEN_SCALE * imageScale;
      const height = this.currentMap.height * SCREEN_SCALE * imageScale;

      this.incrementX = (this.TV_WIDTH - width) / 2;
      this.incrementY = (this.TV_HEIGHT - height) / 2;
      this.currentEl.nativeElement.style.width = width + 'px';
      this.currentEl.nativeElement.style.height = height + 'px';
      this.currentEl.nativeElement.style.left = this.incrementX + 200 + 'px';
      this.currentEl.nativeElement.style.top = this.incrementY + 200 + 'px';
      this.tvEl.nativeElement.style.backgroundColor = this.currentMap.background;
      this.scale = 1 / SCREEN_SCALE;
      this.currentLayers = this.currentMap.layers.map((l) => {
        return {
          name: l,
          path: this.currentMap!.makeLayer(l),
          selected: layers.indexOf(this.currentMap!.makeLayer(l)) >= 0,
          shown: layers.indexOf(this.currentMap!.makeLayer(l)) >= 0,
        };
      });
    }
  }

  onClick(name: string) {
    this.currentMap = this.mapsByName.get(name);
    this.imagePosition.x = 0;
    this.imagePosition.y = 0;
    this.currentEl.nativeElement.style.transform = '';

    this.showMap();
    this.campaign?.setMap(name);
    this.campaign?.setMapPosition(0, 0);
    this.campaign?.setMapLayers([]);
  }

  onDragEnd(event: CdkDragEnd) {
    this.move(event.distance.x, event.distance.y);
  }

  private move(x: number, y: number) {
    this.imagePosition = { x: this.imagePosition.x + x, y: this.imagePosition.y + y };
    this.campaign?.setMapPosition(this.imagePosition.x * this.scale, this.imagePosition.y * this.scale);
  }

  onPosition(left: 1 | 0 | -1, top: 1 | 0 | -1) {
    const targetX = left * this.incrementX;
    const targetY = top * this.incrementY;

    this.move(targetX - this.imagePosition.x, targetY - this.imagePosition.y);
  }

  onRotate(rotate: 1 | -1) {
    this.rotation = (this.rotation + rotate * 90) % 360;
  }

  onLocation(location: string) {
    this.selectedLocations.push(location);
    this.filteredLocations = this.extractLocations();
    this.filteredMaps = this.determineMapsByLocations(this.maps);
  }

  onLevel(level: number) {
    this.selectedLocations.splice(level);
    this.filteredLocations = this.extractLocations();
    this.filteredMaps = this.determineMapsByLocations(this.maps);
  }

  onLayerPreview(layer: Layer) {
    layer.selected = !layer.selected;

    if (!layer.selected) {
      layer.shown = false;
    }
  }

  onLayerShow(layer: Layer) {
    layer.shown = !layer.shown;
    layer.selected = layer.shown;

    this.campaign?.setMapLayers(this.currentLayers.filter((l) => l.shown).map((l) => l.path));
  }

  onScreen() {
    if (this.campaign) {
      window.open('/map/' + this.campaign.name, MAP_NAME);
    }
  }

  onClearLayers() {
    for (const layer of this.currentLayers) {
      layer.selected = false;
      layer.shown = false;

      this.campaign?.setMapLayers(this.currentLayers.filter((l) => l.shown).map((l) => l.path));
    }
  }

  private extractLocations(): string[] {
    const locations = new Set<string>(
      this.maps.filter((m) => this.matchesLocations(m, true)).map((m) => m.locations[this.selectedLocations.length]),
    );
    return Array.from(locations).sort();
  }

  private determineMapsByLocations(maps: BattleMap[]): BattleMap[] {
    const filtered = maps.filter((m) => this.matchesLocations(m, false));
    return filtered.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  }

  private matchesLocations(map: BattleMap, includePartial: boolean): boolean {
    if (includePartial) {
      if (this.selectedLocations.length + 1 > map.locations.length) {
        return false;
      }
    } else {
      if (map.locations.length > this.selectedLocations.length) {
        return false;
      }
    }

    for (let i = 0; i < this.selectedLocations.length; i++) {
      if (map.locations[i] !== this.selectedLocations[i]) {
        return false;
      }
    }

    return true;
  }

  private static scale(pixels: number, scale: number): number {
    return Math.round(pixels * scale);
  }
}
