import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutTextComponent } from './ui/common/about-text/about-text.component';
import { AreaContainerComponent } from './ui/common/area-container/area-container.component';
import { CalendarComponent } from './ui/common/calendar/calendar.component';
import { ChipComponent } from './ui/common/chip/chip.component';
import { DialogComponent } from './ui/common/dialog/dialog.component';
import { FormattedTextComponent } from './ui/common/formatted-text/formatted-text.component';
import { FormatterPipe } from './ui/common/formatter.pipe';
import { LabeledTextComponent } from './ui/common/labeled-text/labeled-text.component';
import { LocationComponent } from './ui/common/location/location.component';
import { ModifierPipe } from './ui/common/modifier.pipe';
import { PageTitleComponent } from './ui/common/page-title/page-title.component';
import { PageComponent } from './ui/common/page/page.component';
import { SelectionTileComponent } from './ui/common/selection-tile/selection-tile.component';
import { TaperComponent } from './ui/common/taper/taper.component';
import { ToolbarComponent } from './ui/common/toolbar/toolbar.component';
import { AboutComponent } from './ui/pages/about/about.component';
import { AdventureEditDialogComponent } from './ui/pages/campaign/adventure-edit-dialog/adventure-edit-dialog.component';
import { AdventureSummaryDialogComponent } from './ui/pages/campaign/adventure-summary-dialog/adventure-summary-dialog.component';
import { AdventureSummaryPageComponent } from './ui/pages/campaign/adventure-summary-page/adventure-summary-page.component';
import { AdventureSummaryComponent } from './ui/pages/campaign/adventure-summary/adventure-summary.component';
import { AdventureComponent } from './ui/pages/campaign/adventure/adventure.component';
import { CampaignScreenContainerComponent } from './ui/pages/campaign/campaign-screen-container/campaign-screen-container.component';
import { CampaignScreenComponent } from './ui/pages/campaign/campaign-screen/campaign-screen.component';
import { CampaignComponent } from './ui/pages/campaign/campaign.component';
import { EncounterEditDialogComponent } from './ui/pages/campaign/encounter-edit-dialog/encounter-edit-dialog.component';
import { EntityComponent } from './ui/pages/campaign/entity/entity.component';
import { ItemDialogComponent } from './ui/pages/campaign/item-dialog/item-dialog.component';
import { ItemComponent } from './ui/pages/campaign/item/item.component';
import { JournalEditDialogComponent } from './ui/pages/campaign/journal-edit-dialog/journal-edit-dialog.component';
import { AdventureEventEditDialogComponent } from './ui/pages/campaign/journal/adventure-event-edit-dialog/adventure-event-edit-dialog.component';
import { JournalComponent } from './ui/pages/campaign/journal/journal.component';
import { MiniatureSelectionDialogComponent } from './ui/pages/campaign/miniature-selection-dialog/miniature-selection-dialog.component';
import { MonsterDialogComponent } from './ui/pages/campaign/monster-dialog/monster-dialog.component';
import { MonsterComponent } from './ui/pages/campaign/monster/monster.component';
import { ScreenImageButtonComponent } from './ui/pages/campaign/screen-image-button/screen-image-button.component';
import { SpellDialogComponent } from './ui/pages/campaign/spell-dialog/spell-dialog.component';
import { SpellComponent } from './ui/pages/campaign/spell/spell.component';
import { XpDialogComponent } from './ui/pages/campaign/xp-dialog/xp-dialog.component';
import { CampaignEditDialogComponent } from './ui/pages/campaigns/campaign-edit-dialog/campaign-edit-dialog.component';
import { CampaignsComponent } from './ui/pages/campaigns/campaigns.component';
import { ReferenceComponent } from './ui/pages/common/reference/reference.component';
import { MapComponent } from './ui/pages/map/map.component';
import { MapsComponent } from './ui/pages/maps/maps.component';
import { FilterDialogComponent } from './ui/pages/miniatures/filter-dialog/filter-dialog.component';
import { FilterComponent } from './ui/pages/miniatures/filter/filter.component';
import { LocationDialogComponent } from './ui/pages/miniatures/location-dialog/location-dialog.component';
import { LocationEditDialogComponent } from './ui/pages/miniatures/location-edit-dialog/location-edit-dialog.component';
import { MiniatureDetailsComponent } from './ui/pages/miniatures/miniature-details/miniature-details.component';
import { MiniatureComponent } from './ui/pages/miniatures/miniature/miniature.component';
import { MiniaturesGridComponent } from './ui/pages/miniatures/miniatures-grid/miniatures-grid.component';
import { MiniaturesComponent } from './ui/pages/miniatures/miniatures.component';
import { TitleComponent } from './ui/pages/title/title.component';
import { FooterComponent } from './ui/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutComponent,
    MiniaturesComponent,
    SelectionTileComponent,
    MiniatureComponent,
    PageTitleComponent,
    FilterDialogComponent,
    MiniatureDetailsComponent,
    ChipComponent,
    MapsComponent,
    MapComponent,
    LocationDialogComponent,
    LocationComponent,
    LocationEditDialogComponent,
    CampaignsComponent,
    CampaignEditDialogComponent,
    CampaignComponent,
    XpDialogComponent,
    AdventureComponent,
    PageComponent,
    AdventureEditDialogComponent,
    EncounterEditDialogComponent,
    SpellComponent,
    TaperComponent,
    LabeledTextComponent,
    FormattedTextComponent,
    EntityComponent,
    MonsterComponent,
    SpellDialogComponent,
    MonsterDialogComponent,
    ReferenceComponent,

    FormatterPipe,
    ModifierPipe,
    CampaignScreenComponent,
    CampaignScreenContainerComponent,
    AreaContainerComponent,
    ScreenImageButtonComponent,
    ItemComponent,
    ItemDialogComponent,
    MiniatureSelectionDialogComponent,
    FilterComponent,
    MiniaturesGridComponent,
    AdventureSummaryDialogComponent,
    AboutTextComponent,
    DialogComponent,
    JournalComponent,
    JournalEditDialogComponent,
    AdventureEventEditDialogComponent,
    CalendarComponent,
    AdventureSummaryComponent,
    AdventureSummaryPageComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSliderModule,
    MatCheckboxModule,

    DragDropModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
