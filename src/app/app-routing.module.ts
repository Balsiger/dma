import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { MiniaturesComponent } from './ui/miniatures/miniatures.component';
import { TitleComponent } from './ui/title/title.component';

const routes: Routes = [
  { path: '', title: 'DMA', component: TitleComponent },
  { path: 'miniatures', title: 'DMA - Miniatures', component: MiniaturesComponent },
  { path: 'about', title: 'DMA - About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
