import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';

@Component({
    selector: 'party-box',
    imports: [CommonModule, ExpandingBoxComponent, SelectionTileComponent],
    templateUrl: './party-box.component.html',
    styleUrl: './party-box.component.scss'
})
export class PartyBoxComponent {
  campaign = input<Campaign>();
}
