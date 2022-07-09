import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { MiniaturesComponent } from './ui/miniatures/miniatures.component';
import { TitleComponent } from './ui/title/title.component';

const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'miniatures', component: MiniaturesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
