import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/pages/about/about.component';
import { AdventureComponent } from './ui/pages/campaign/adventure/adventure.component';
import { CampaignScreenContainerComponent } from './ui/pages/campaign/campaign-screen-container/campaign-screen-container.component';
import { CampaignComponent } from './ui/pages/campaign/campaign.component';
import { CampaignsComponent } from './ui/pages/campaigns/campaigns.component';
import { MapComponent } from './ui/pages/map/map.component';
import { MapsComponent } from './ui/pages/maps/maps.component';
import { MiniaturesComponent } from './ui/pages/miniatures/miniatures.component';
import { TitleComponent } from './ui/pages/title/title.component';

const routes: Routes = [
  { path: '', title: 'DMA', component: TitleComponent },
  { path: 'campaigns', title: 'DMA - Campaigns', component: CampaignsComponent },
  { path: 'campaign/:campaign', title: 'DMA - Campaign', component: CampaignComponent },
  { path: 'campaign/:campaign/adventure/:adventure', title: 'DMA - Adventure', component: AdventureComponent },
  { path: 'campaign/:campaign/adventure/:adventure/:id', title: 'DMA - Adventure', component: AdventureComponent },
  { path: 'campaign/:campaign/map', title: 'DMA - Campaign Map', component: MapsComponent },
  { path: 'screen/:campaign', title: 'DMA - Campaign Screen', component: CampaignScreenContainerComponent },
  { path: 'miniatures', title: 'DMA - Miniatures', component: MiniaturesComponent },
  { path: 'map/:campaign', title: 'DMA - Map', component: MapComponent },
  { path: 'about', title: 'DMA - About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
