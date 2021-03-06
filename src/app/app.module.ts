import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './ui/about/about.component';
import { ChipComponent } from './ui/chip/chip.component';
import { FilterDialogComponent } from './ui/miniatures/filter-dialog/filter-dialog.component';
import { MiniatureDetailsComponent } from './ui/miniatures/miniature-details/miniature-details.component';
import { MiniatureComponent } from './ui/miniatures/miniature/miniature.component';
import { MiniaturesComponent } from './ui/miniatures/miniatures.component';
import { PageTitleComponent } from './ui/page-title/page-title.component';
import { SelectionTileComponent } from './ui/selection-tile/selection-tile.component';
import { TitleComponent } from './ui/title/title.component';

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
    ChipComponent
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
