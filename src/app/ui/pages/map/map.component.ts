import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleMap } from 'src/app/data/entities/battle_map';
import { MapsService } from 'src/app/services/entity/maps.service';
import { Campaign } from '../../../data/facts/campaign';
import { CampaignService } from '../../../services/fact/campaign.service';
import { TV_PX_PER_SQUARE } from '../../campaign/map-setup/map-setup.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;
  @ViewChild('image') imageEl!: ElementRef<HTMLDivElement>;

  campaign = signal<Campaign | undefined>(undefined);
  campaignMap = computed(() => this.campaign()?.map());
  maps = signal<Map<string, BattleMap>>(new Map());
  map = computed(() => this.maps()?.get(this.campaign()?.map().name || ''));
  scale = computed(() => TV_PX_PER_SQUARE / (this.map()?.pxPerSquare || 100));
  centerX = computed(() => (window.innerWidth - (this.map()?.width || 0) * this.scale()) / 2);
  centerY = computed(() => (window.innerHeight - (this.map()?.height || 0) * this.scale()) / 2);
  rotation = computed(() => this.campaign()?.map()?.rotation || 0);
  layers = computed(() => this.campaign()?.map()?.layers || []);
  left = computed(() => this.campaign()?.map()?.x || 0 + this.centerX());
  top = computed(() => this.campaign()?.map()?.y || 0 + this.centerY());

  constructor(
    private readonly mapService: MapsService,
    private readonly campaignService: CampaignService,
    private readonly route: ActivatedRoute,
  ) {}

  async ngAfterViewInit() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign.set(this.campaignService.get(campaignName));
    }

    this.mapService.getAll().then((maps) => {
      this.maps.set(new Map<string, BattleMap>(maps.map((m) => [m.fullName, m])));
    });
  }
}
