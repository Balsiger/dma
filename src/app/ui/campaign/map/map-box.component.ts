import { Component, effect, input, signal } from '@angular/core';
import { BattleMap } from '../../../data/entities/battle-map';
import { Campaign } from '../../../data/facts/campaign';
import { EntitiesService } from '../../../services/entity/entities.service';
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
  shown = signal(false);

  constructor(private readonly entitiesService: EntitiesService) {
    effect(async () => {
      if (this.campaign()) {
        this.map = this.entitiesService.maps.get(this.campaign()!.map().name());
      }
    });
  }
}
