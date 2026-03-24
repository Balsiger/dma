import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';

@Component({
  selector: 'npc-box',
  imports: [ExpandingBoxComponent],
  templateUrl: './npc-box.component.html',
  styleUrl: './npc-box.component.scss',
})
export class NpcBoxComponent {
  campaign = input.required<Campaign>();
}
