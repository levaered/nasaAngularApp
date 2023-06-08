import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarsComponent } from './mars/mars.component';
import { EPICComponent } from './epic/epic.component';
import { EarthComponent } from './earth/earth.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { APODComponent } from './apod/apod.component';

const routes: Routes = [
  { path: 'mars-component', component: MarsComponent },
  { path: 'epic-component', component: EPICComponent },
  { path: 'earth-component', component: EarthComponent },
  { path: 'asteroid-component', component: AsteroidsComponent },
  { path: 'apod-component', component: APODComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
