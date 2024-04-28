import { Component, effect, input } from '@angular/core';
import { BattleMap } from '../../../data/entities/battle_map';
import { Campaign } from '../../../data/facts/campaign';
import { MapsService } from '../../../services/entity/maps.service';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { MapSetupComponent } from './map-setup.component';

@Component({
  selector: 'map-box',
  standalone: true,
  imports: [ExpandingBoxComponent, MapSetupComponent],
  templateUrl: './map-box.component.html',
  styleUrl: './map-box.component.scss',
})
export class MapBoxComponent {
  campaign = input<Campaign>();
  map?: BattleMap;

  constructor(private readonly mapService: MapsService) {
    effect(async () => {
      if (this.campaign()) {
        this.map = await this.mapService.get(this.campaign()!.map().name());
      }
    });
  }
}
