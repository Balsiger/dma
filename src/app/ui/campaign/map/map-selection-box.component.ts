import { Component, computed, input, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Tree } from '../../../common/tree';
import { BattleMap } from '../../../data/entities/battle-map';
import { Campaign } from '../../../data/facts/campaign';
import { MapsService } from '../../../services/entity/maps.service';
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

  selected = signal<string[]>([]);
  maps = computed(() => this.getMaps(this.selection()));
  selection = computed(() =>
    this.selected().length > 0 ? this.selected() : this.campaign()?.locations().slice(0, -1),
  );
  lastSelection = computed(() => {
    const selection = this.campaign()?.locations();
    return selection && selection.length > 0 ? selection[selection.length - 1] : '';
  });

  locations: Tree<string> = new Tree<string>();
  mapsByName = new Map<string, BattleMap>();

  constructor(private readonly mapService: MapsService) {
    this.load();
  }

  private async load() {
    this.mapsByName = new Map<string, BattleMap>((await this.mapService.getAll()).map((m) => [m.name, m]));
    this.locations = this.computeLocations((await this.mapService.getAll()).values());
  }

  private computeLocations(maps: IterableIterator<BattleMap>): Tree<string> {
    const locations = new Tree<string>();

    for (const map of maps) {
      locations.add([...map.locations, map.name]);
    }

    return locations.sort();
  }

  getMaps(locations?: string[]): BattleMap[] {
    const location = locations?.join('/');
    const names = this.locations.get(locations);
    return names.map((n) => this.mapsByName.get(n)).filter(this.isBattleMap);
  }

  getMap(name: string): BattleMap | undefined {
    const campaign = this.campaign();
    if (campaign) {
      return this.mapsByName.get(campaign.locations().slice(0, -1).join('/') + '/' + name);
    }

    return undefined;
  }

  isBattleMap = (map: BattleMap | undefined): map is BattleMap => {
    return !!map;
  };

  onSelect(index: number, location: string) {
    const selection = this.selection();
    if (selection) {
      this.selected.set([...selection.slice(0, index), location]);
    }
  }

  onMapSelection(map: BattleMap) {
    this.campaign()?.setMap(map.fullName);
    this.campaign()?.setMapPosition(0, 0);
    this.campaign()?.setMapLayers([]);
  }
}
