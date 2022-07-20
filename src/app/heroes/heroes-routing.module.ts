import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
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
