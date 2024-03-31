import { Component, Input, effect } from '@angular/core';
import { BattleMap } from '../../../data/entities/battle_map';
import { Campaign } from '../../../data/facts/campaign';
import { MapsService } from '../../../services/maps.service';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { MapSetupComponent } from '../map-setup/map-setup.component';

@Component({
  selector: 'map-box',
  standalone: true,
  imports: [ExpandingBoxComponent, MapSetupComponent],
  templateUrl: './map-box.component.html',
  styleUrl: './map-box.component.scss',
})
export class MapBoxComponent {
  @Input() campaign?: Campaign;

  map?: BattleMap;

  constructor(private readonly mapService: MapsService) {
    effect(async () => {
      if (this.campaign) {
        this.map = await this.mapService.getMap(this.campaign.map$());
      }
    });
  }
}
