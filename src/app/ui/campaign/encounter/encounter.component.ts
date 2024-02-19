import { Component, Input } from '@angular/core';
import { Encounter } from '../../../data/things/encounter';
import { CampaignsService } from '../../../services/campaigns.service';
import { BadgeComponent } from '../../common/badge/badge.component';
import { LinkComponent } from '../../common/link/link.component';
import { ItemComponent } from '../../pages/campaign/item/item.component';
import { MonsterComponent } from '../../pages/campaign/monster/monster.component';
import { ScreenImageButtonComponent } from '../../pages/campaign/screen-image-button/screen-image-button.component';
import { SpellComponent } from '../../pages/campaign/spell/spell.component';
import { NPCComponent } from '../npc/npc.component';

@Component({
  selector: 'encounter',
  standalone: true,
  imports: [
    ScreenImageButtonComponent,
    BadgeComponent,
    LinkComponent,
    NPCComponent,
    MonsterComponent,
    SpellComponent,
    ItemComponent,
  ],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss',
})
export class EncounterComponent {
  @Input() encounter?: Encounter;

  constructor(readonly campaignService: CampaignsService) {}

  async onStartEncounter() {
    if (this.encounter) {
      const started = this.encounter?.start();
      await this.campaignService.changeEncounter(this.encounter, started);
      //this.load();
    }
  }

  async onFinishEncounter() {
    if (this.encounter) {
      const started = this.encounter?.finish();
      await this.campaignService.changeEncounter(this.encounter, started);
      //this.load();
    }
  }
}
