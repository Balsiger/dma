import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Miniature } from 'src/app/data/miniature';

export interface DialogData {
  miniature: Miniature;
}

@Component({
  selector: 'app-miniature-details',
  templateUrl: './miniature-details.component.html',
  styleUrls: ['./miniature-details.component.scss']
})
export class MiniatureDetailsComponent implements OnInit {

  miniature: Miniature;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: DialogData) {
    this.miniature = data.miniature;
  }

  ngOnInit(): void {
  }

}
