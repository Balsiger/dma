import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
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
export class MapComponent implements AfterViewInit, DoCheck {
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;
  @ViewChild('image') imageEl!: ElementRef<HTMLDivElement>;

  maps?: Map<string, BattleMap>;
  campaign?: Campaign;
  map?: BattleMap;
  layers: string[] = [];
  left = 0;
  top = 0;
  centerX = 0;
  centerY = 0;
  scale = 0;
  rotation = 0;

  constructor(
    private readonly mapService: MapsService,
    private readonly campaignService: CampaignService,
    private readonly route: ActivatedRoute,
  ) {}

  async ngAfterViewInit() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = this.campaignService.get(campaignName);
    }

    this.mapService.getAll().then((maps) => {
      this.maps = new Map<string, BattleMap>(maps.map((m) => [m.fullName, m]));

      this.campaign?.load().then(() => {
        this.updateMap();
      });
    });
  }

  ngDoCheck() {
    if (this.map?.fullName !== this.campaign?.map) {
      this.updateMap();
    }

    if (this.campaign) {
      this.layers = this.campaign.map().layers;
      const x = this.campaign?.map().x;
      const y = this.campaign?.map().y;
      if (this.imageEl) {
        this.move(x, y);
      }
      this.rotation = this.campaign.map().rotation;
    }
  }

  private updateMap() {
    this.map = this.maps?.get(this.campaign?.map().name || '');

    if (this.map) {
      this.canvasEl.nativeElement.style.background = this.map.background;

      this.scale = TV_PX_PER_SQUARE / this.map.pxPerSquare;
      this.imageEl.nativeElement.style.transform = 'scale(' + this.scale + ')';

      this.centerX = (window.innerWidth - this.map.width * this.scale) / 2;
      this.centerY = (window.innerHeight - this.map.height * this.scale) / 2;
    }
  }

  private move(x: number, y: number) {
    this.left = x + this.centerX;
    this.top = y + this.centerY;

    this.imageEl.nativeElement.style.left = this.left + 'px';
    this.imageEl.nativeElement.style.top = this.top + 'px';
  }
}
