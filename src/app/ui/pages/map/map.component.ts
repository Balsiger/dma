import { AfterViewInit, Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageMap } from 'src/app/data/image_map';
import { MapsService } from 'src/app/services/maps.service';
import { Campaign } from '../../../data/things/campaign';
import { CampaignsService } from '../../../services/campaigns.service';
import { TV_PX_PER_SQUARE } from '../maps/maps.component';
import { NgIf, NgFor } from '@angular/common';

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

  maps?: Map<string, ImageMap>;
  campaign?: Campaign;
  map?: ImageMap;
  layers: string[] = [];
  left = 0;
  top = 0;
  centerX = 0;
  centerY = 0;
  scale = 0;

  constructor(
    private readonly mapService: MapsService,
    private readonly campaignService: CampaignsService,
    private readonly route: ActivatedRoute
  ) {}

  async ngAfterViewInit() {
    const campaignName = this.route.snapshot.paramMap.get('campaign');
    if (campaignName) {
      this.campaign = this.campaignService.getCampaign(campaignName);
    }

    this.mapService.getMaps().then((maps) => {
      this.maps = maps;

      this.campaign?.load().then(() => {
        this.updateMap();
      });
    });
  }

  ngDoCheck() {
    if (this.map?.fullName !== this.campaign?.map) {
      this.updateMap();
    }

    if (this.layers !== this.campaign?.mapLayers) {
      this.layers = this.campaign?.mapLayers || [];
    }

    if (this.campaign?.mapPosition?.length == 2) {
      const x = this.campaign?.mapPosition[0] || 0;
      const y = this.campaign?.mapPosition[1] || 0;
      if (this.imageEl) {
        this.move(x, y);
      }
    }
  }

  private updateMap() {
    this.map = this.maps?.get(this.campaign?.map || '');

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
