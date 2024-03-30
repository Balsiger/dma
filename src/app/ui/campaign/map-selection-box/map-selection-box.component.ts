import { Component, computed, input, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Tree } from '../../../common/tree';
import { Campaign } from '../../../data/facts/campaign';
import { ImageMap } from '../../../data/image_map';
import { MapsService } from '../../../services/maps.service';
import { ChipComponent } from '../../common/chip/chip.component';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';

@Component({
  selector: 'map-selection-box',
  standalone: true,
  imports: [ExpandingBoxComponent, MatButtonToggleModule, ChipComponent],
  templateUrl: './map-selection-box.component.html',
  styleUrl: './map-selection-box.component.scss',
})
export class MapSelectionBoxComponent {
  campaign = input<Campaign>();
  locations: Tree<string> = new Tree<string>();
  mapsByName = new Map<string, ImageMap>();
  maps = computed(() => this.getMaps(this.selection()));
  selected = signal<string[]>([]);
  selection = computed(() =>
    this.selected().length > 0 ? this.selected() : this.campaign()?.locations$().slice(0, -1),
  );
  lastSelection = computed(() => {
    const selection = this.campaign()?.locations$();
    return selection && selection.length > 0 ? selection[selection.length - 1] : '';
  });

  constructor(private readonly mapService: MapsService) {
    this.load();
  }

  private async load() {
    this.mapsByName = await this.mapService.getMaps();
    this.locations = this.computeLocations(this.mapsByName.values());
  }

  private computeLocations(maps: IterableIterator<ImageMap>): Tree<string> {
    const locations = new Tree<string>();

    for (const map of maps) {
      locations.add([...map.locations, map.name]);
    }

    return locations.sort();
  }

  getMaps(locations?: string[]): ImageMap[] {
    const location = locations?.join('/');
    const names = this.locations.get(locations);
    return names.map((n) => this.mapsByName.get(location + '/' + n)).filter(this.isImageMap);
  }

  getMap(name: string): ImageMap | undefined {
    const campaign = this.campaign();
    if (campaign) {
      return this.mapsByName.get(campaign.locations.slice(0, -1).join('/') + '/' + name);
    }

    return undefined;
  }

  isImageMap = (map: ImageMap | undefined): map is ImageMap => {
    return !!map;
  };

  onSelect(index: number, location: string) {
    const selection = this.selection();
    if (selection) {
      this.selected.set([...selection.slice(0, index), location]);
    }
  }

  onMapSelection(map: ImageMap) {
    this.campaign()?.setMap(map.fullName);
    this.campaign()?.setMapPosition(0, 0);
    this.campaign()?.setMapLayers([]);
  }
}
