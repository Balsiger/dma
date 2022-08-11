import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { MapComponent } from './ui/map/map.component';
import { MapsComponent } from './ui/maps/maps.component';
import { MiniaturesComponent } from './ui/miniatures/miniatures.component';
import { TitleComponent } from './ui/title/title.component';

const routes: Routes = [
  { path: '', title: 'DMA', component: TitleComponent },
  { path: 'miniatures', title: 'DMA - Miniatures', component: MiniaturesComponent },
  { path: 'maps', title: 'DMA - Maps', component: MapsComponent },
  { path: 'map/:name', title: 'DMA - Map', component: MapComponent },
  { path: 'about', title: 'DMA - About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
