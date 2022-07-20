import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes-routing.module').then(
        (m) => m.HeroesRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: '/heroes/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
