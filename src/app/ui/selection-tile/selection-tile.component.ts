import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'selection-tile',
  templateUrl: './selection-tile.component.html',
  styleUrls: ['./selection-tile.component.scss']
})
export class SelectionTileComponent implements OnInit {

  @Input() title = '';
  @Input() image = '';
  @Input() target = '';

  constructor() { }

  ngOnInit(): void {
  }

}
