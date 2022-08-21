import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageMap } from 'src/app/data/image_map';
import { MapsService } from 'src/app/data/maps.service';
import { TV_PX_PER_SQUARE } from '../maps/maps.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLDivElement>;
  @ViewChild('image') imageEl!: ElementRef<HTMLDivElement>;

  map?: ImageMap;
  layers: string[] = [];
  left = 0;
  top = 0;

  constructor(private readonly mapService: MapsService, private readonly route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.mapService.getMaps().then(maps => {
      this.map = maps.get(this.route.snapshot.paramMap.get('name') || '');

      if (this.map) {
        this.canvasEl.nativeElement.style.background = this.map.background;

        const scale = TV_PX_PER_SQUARE / this.map.pxPerSquare;
        this.imageEl.nativeElement.style.transform = 'scale(' + scale + ')';

        setTimeout(() => {
          this.resize();
        }, 100);
      }
    });
  }

  @HostListener('window:resize')
  private resize() {
    this.left = ((window.innerWidth - this.imageEl.nativeElement.clientWidth) / 2);
    this.top = ((window.innerHeight - this.imageEl.nativeElement.clientHeight) / 2);
    this.move(0, 0);
  }

  private move(x: number, y: number) {
    this.left += x;
    this.top += y;

    this.imageEl.nativeElement.style.left = this.left + 'px';
    this.imageEl.nativeElement.style.top = this.top + 'px';
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent) {
    if (event.data?.length === 3) {
      this.move(event.data[0], event.data[1]);
      this.layers = event.data[2];
    }
  }
}
