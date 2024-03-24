import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ScreenTrackingService, UserTrackingService, getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { ProductsComponent } from '../entities/products/ui/pages/products/products.component';
import { environment } from '../environments/environment';
import { AboutComponent } from './ui/pages/about/about.component';
import { AdventureSummaryPageComponent } from './ui/pages/campaign/adventure-summary-page/adventure-summary-page.component';
import { AdventureComponent } from './ui/pages/campaign/adventure/adventure.component';
import { CampaignScreenContainerComponent } from './ui/pages/campaign/campaign-screen-container/campaign-screen-container.component';
import { CampaignComponent } from './ui/pages/campaign/campaign.component';
import { CampaignsComponent } from './ui/pages/campaigns/campaigns.component';
import { ConditionsComponent } from './ui/pages/conditions/conditions.component';
import { ItemsComponent } from './ui/pages/items/items.component';
import { LibraryComponent } from './ui/pages/library/library.component';
import { MapComponent } from './ui/pages/map/map.component';
import { MapsComponent } from './ui/pages/maps/maps.component';
import { MiniaturesComponent } from './ui/pages/miniatures/miniatures.component';
import { MonstersComponent } from './ui/pages/monsters/monsters.component';
import { NewCampaignComponent } from './ui/pages/new-campaign/new-campaign.component';
import { SpellsComponent } from './ui/pages/spells/spells.component';
import { TitleComponent } from './ui/pages/title/title.component';

const routes: Routes = [
  { path: '', title: 'DMA', component: TitleComponent },
  { path: 'campaigns', title: 'DMA - Campaigns', component: CampaignsComponent },
  { path: 'old-campaign/:campaign', title: 'DMA - Campaign', component: CampaignComponent },
  { path: 'campaign/:campaign', title: 'DMA - Campaign', component: NewCampaignComponent },
  { path: 'campaign/:campaign/adventure/:adventure', title: 'DMA - Adventure', component: AdventureComponent },
  { path: 'campaign/:campaign/adventure/:adventure/:id', title: 'DMA - Adventure', component: AdventureComponent },
  { path: 'campaign/:campaign/map', title: 'DMA - Campaign Map', component: MapsComponent },
  { path: 'library', title: 'DMA - Library', component: LibraryComponent },
  { path: 'library/monsters', title: 'DMA - Monsters', component: MonstersComponent },
  { path: 'library/items', title: 'DMA - Items', component: ItemsComponent },
  { path: 'library/spells', title: 'DMA - Spells', component: SpellsComponent },
  { path: 'library/conditions', title: 'DMA - Conditions', component: ConditionsComponent },
  { path: 'library/miniatures', title: 'DMA - Miniatures', component: MiniaturesComponent },
  { path: 'library/products', title: 'DMA - Products', component: ProductsComponent },
  { path: 'screen/:campaign', title: 'DMA - Campaign Screen', component: CampaignScreenContainerComponent },
  { path: 'map/:campaign', title: 'DMA - Map', component: MapComponent },
  {
    path: 'summary/:campaign/adventure/:adventure',
    title: 'DAM - Adventure Summary',
    component: AdventureSummaryPageComponent,
  },
  { path: 'about', title: 'DMA - About', component: AboutComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ScreenTrackingService,
    UserTrackingService,
    provideAnimations(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAnalytics(() => getAnalytics()),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideMessaging(() => getMessaging()),
      providePerformance(() => getPerformance()),
      provideStorage(() => getStorage()),
    ]),
  ],
};
