import { Component, Input, OnInit } from '@angular/core';
import { Miniature } from '../../../data/miniature';

@Component({
  selector: 'miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss']
})
export class MiniatureComponent implements OnInit {

  @Input() miniature? : Miniature;

  constructor() { }

  ngOnInit(): void {
  }

}
