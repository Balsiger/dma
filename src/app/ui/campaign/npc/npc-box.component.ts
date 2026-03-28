import { Component, input } from '@angular/core';
import { Campaign } from '../../../data/facts/campaign';
import { ExpandingBoxComponent } from '../../common/expanding-box/expanding-box.component';
import { NPCComponent } from '../../npc/npc.component';

@Component({
  selector: 'npc-box',
  imports: [ExpandingBoxComponent, NPCComponent],
  templateUrl: './npc-box.component.html',
  styleUrl: './npc-box.component.scss',
})
export class NpcBoxComponent {
  campaign = input.required<Campaign>();
}
