import { ApplicationConfig } from '@angular/core';
import { ScreenTrackingService, UserTrackingService, getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { environment } from '../environments/environment';
import { AdventureItemsComponent } from './ui/campaign/adventure/adventure-items.component';
import { AdventureMiniatureLabelsComponent } from './ui/campaign/adventure/adventure-miniature-labels.component';
import { AdventureSummaryPageComponent } from './ui/campaign/adventure/adventure-summary-page.component';
import { CampaignComponent } from './ui/campaign/campaign.component';
import { MapComponent } from './ui/campaign/map/map.component';
import { CampaignScreenContainerComponent } from './ui/campaign/screen/campaign-screen-container.component';
import { GlossaryCardsComponent } from './ui/glossary/glossary-cards.component';
import { ItemsComponent } from './ui/item/items.component';
import { LibraryComponent } from './ui/library/library.component';
import { MonsterCardsComponent } from './ui/monster/monster-cards.component';
import { AboutComponent } from './ui/pages/about/about.component';
import { CampaignsComponent } from './ui/pages/campaigns/campaigns.component';
import { ConditionsComponent } from './ui/pages/conditions/conditions.component';
import { EntityEditorComponent } from './ui/pages/entity-editor/entity-editor.component';
import { GlossariesComponent } from './ui/pages/glossaries/glossaries.component';
import { MiniaturesComponent } from './ui/pages/miniatures/miniatures.component';
import { MonstersComponent } from './ui/pages/monsters/monsters.component';
import { NpcsComponent } from './ui/pages/npcs/npcs.component';
import { ProductsComponent } from './ui/pages/products/products.component';
import { SpellsComponent } from './ui/pages/spells/spells.component';
import { TitleComponent } from './ui/pages/title/title.component';
import { SpellCardsComponent } from './ui/spell/spell-cards.component';

const routes: Routes = [
  { path: '', title: 'DMA', component: TitleComponent },
  { path: 'campaigns', title: 'DMA - Campaigns', component: CampaignsComponent },
  { path: 'campaign/:campaign', title: 'DMA - Campaign', component: CampaignComponent },
  { path: 'library', title: 'DMA - Library', component: LibraryComponent },
  { path: 'library/monsters', title: 'DMA - Monsters', component: MonstersComponent },
  { path: 'library/npcs', title: 'DMA - NPCs', component: NpcsComponent },
  { path: 'library/items', title: 'DMA - Items', component: ItemsComponent },
  { path: 'library/spells', title: 'DMA - Spells', component: SpellsComponent },
  { path: 'library/conditions', title: 'DMA - Conditions', component: ConditionsComponent },
  { path: 'library/glossary', title: 'DMA - Conditions', component: GlossariesComponent },
  { path: 'library/miniatures', title: 'DMA - Miniatures', component: MiniaturesComponent },
  { path: 'library/products', title: 'DMA - Products', component: ProductsComponent },
  { path: 'screen/:campaign', title: 'DMA - Campaign Screen', component: CampaignScreenContainerComponent },
  { path: 'map/:campaign', title: 'DMA - Map', component: MapComponent },
  {
    path: 'summary/:campaign/adventure/:adventure',
    title: 'DMA - Adventure Summary',
    component: AdventureSummaryPageComponent,
  },
  {
    path: 'labels/:campaign/adventure/:adventure',
    title: 'DMA - Adventure Miniature Labels',
    component: AdventureMiniatureLabelsComponent,
  },
  {
    path: 'items/:campaign/adventure/:adventure',
    title: 'DMA - Adventure Items',
    component: AdventureItemsComponent,
  },
  { path: 'spells', title: 'DMA - Spell Cards', component: SpellCardsComponent },
  { path: 'monsters/:pMonsters', title: 'DMA - Monster Cards', component: MonsterCardsComponent },
  { path: 'glossaries', title: 'DMA - Glossary Cards', component: GlossaryCardsComponent },
  { path: 'edit', title: 'DMA - Entity Editor', component: EntityEditorComponent },
  { path: 'about', title: 'DMA - About', component: AboutComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    ScreenTrackingService,
    UserTrackingService,
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
};
