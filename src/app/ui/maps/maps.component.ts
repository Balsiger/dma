import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ImageMap } from '../../data/image_map';
import { MapsService } from '../../data/maps.service';

const WINDOW_NAME = "DMA-SCREEN";
const TV_WIDTH_PX = 1920;
const TV_HEIGHT_PX = 1080;
const TV_WIDTH_CM = 105;
const TV_HEIGHT_CM = 60;
export const TV_PX_PER_SQUARE = Math.floor(TV_WIDTH_PX / TV_WIDTH_CM * 2.5 + TV_HEIGHT_PX / TV_HEIGHT_CM * 2.5) / 2;

const SCREEN_SCALE = 0.25;

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('current') currentEl!: ElementRef<HTMLImageElement>;
  @ViewChild('tv') tvEl!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;

  mapsByName = new Map<string, ImageMap>();
  maps: ImageMap[] = [];
  filteredMaps: ImageMap[] = [];
  selectedLocations: string[] = [];
  filteredLocations: string[] = [];
  currentMap?: ImageMap;
  window: Window | null = null;
  imagePosition = {x: 0, y: 0};
  scale = 1;
  incrementX = 0;
  incrementY = 0;

  TV_WIDTH = MapsComponent.scale(TV_WIDTH_PX, SCREEN_SCALE);
  TV_HEIGHT = MapsComponent.scale(TV_HEIGHT_PX, SCREEN_SCALE);

  constructor(private readonly mapService: MapsService) { 
  }
  
  ngAfterViewInit() {
    this.mapService.getMaps().then(maps => {
      this.mapsByName = maps;
      this.maps = Array.from(maps.values());

      this.selectedLocations = [];
      this.filteredLocations = this.extractLocations(0);

      this.filteredMaps = this.determineMapsByLocations(this.maps);
    });

    this.tvEl.nativeElement.style.width = this.TV_WIDTH + 'px';
    this.tvEl.nativeElement.style.height = this.TV_HEIGHT + 'px';
    this.canvasEl.nativeElement.style.height = (this.TV_HEIGHT + 400) + 'px';
    this.canvasEl.nativeElement.style.width = (this.TV_WIDTH + 400) + 'px';
  }

  onClick(name: string, width: number, height: number) {
    this.currentMap = this.mapsByName.get(name);
    this.imagePosition.x = 0;
    this.imagePosition.y = 0;
    this.currentEl.nativeElement.style.transform = '';

    if (this.currentMap) {
      const imageScale = TV_PX_PER_SQUARE / this.currentMap.pxPerSquare;
      width *= SCREEN_SCALE * imageScale;
      height *= SCREEN_SCALE * imageScale;

      this.incrementX = (this.TV_WIDTH - width) / 2;
      this.incrementY = (this.TV_HEIGHT - height) / 2;
      this.currentEl.nativeElement.style.width = width + 'px';
      this.currentEl.nativeElement.style.height = height + 'px';
      this.currentEl.nativeElement.style.left = (this.incrementX + 200) + 'px';
      this.currentEl.nativeElement.style.top = (this.incrementY + 200) + 'px';
      this.tvEl.nativeElement.style.backgroundColor = this.currentMap.background;
      this.scale = 1 / SCREEN_SCALE;

      this.window = window.open("/map/" + this.currentMap.name, WINDOW_NAME);
    }
  }

  onDragEnd(event: CdkDragEnd) {
    this.move(event.distance.x, event.distance.y);
  }

  private move(x: number, y: number) {
    this.imagePosition = {x: this.imagePosition.x + x, y: this.imagePosition.y + y };
    this.window?.postMessage([x * this.scale, y * this.scale], "*");
  }

  onPosition(left: 1|0|-1, top: 1|0|-1) {
    const targetX = left * this.incrementX;
    const targetY = top * this.incrementY;

    this.move(targetX - this.imagePosition.x, targetY - this.imagePosition.y);
  }

  onLocation(location: string) {
    this.selectedLocations.push(location);
    this.filteredLocations = this.extractLocations(this.selectedLocations.length);
    this.filteredMaps = this.determineMapsByLocations(this.maps);
  }

  onLevel(level: number) {
    this.selectedLocations.splice(level);
    this.filteredLocations = this.extractLocations(this.selectedLocations.length);
    this.filteredMaps = this.determineMapsByLocations(this.maps);
  }

  private extractLocations(level: number): string[] {
    const locations = new Set<string>(this.maps.filter(m => m.locations.length > level).map(m => m.locations[level]));
    return Array.from(locations).sort();
  }

  private determineMapsByLocations(maps: ImageMap[]): ImageMap[] {
    const filtered = maps.filter(m => this.matchesLocations(m));
    return filtered.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);      
  }

  private matchesLocations(map: ImageMap): boolean {
    if (map.locations.length > this.selectedLocations.length) {
      return false;
    }

    for (let i = 0; i < this.filteredLocations.length; i++) {
      if (map.locations.length > i && map.locations[i] !== this.selectedLocations[i]) {
        return false;
      }
    }

    return true;
  }

  private static scale(pixels: number, scale: number): number {
    return Math.round(pixels * scale);
  }
}
