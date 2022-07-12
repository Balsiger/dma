import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Miniature } from '../../../data/miniature';
import { MiniatureDetailsComponent } from '../miniature-details/miniature-details.component';

@Component({
  selector: 'miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss']
})
export class MiniatureComponent implements OnInit {

  @Input() miniature? : Miniature;

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick() {
    this.dialog.open(MiniatureDetailsComponent, {
      data: {
        miniature: this.miniature,
      }
    });
  }
}
