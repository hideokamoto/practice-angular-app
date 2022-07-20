import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: ':id',
    component: HeroDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
