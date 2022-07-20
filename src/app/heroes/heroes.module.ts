import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { HeroService } from '../shares/hero/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
  ],
  providers: [HeroService],
})
export class HeroesModule {}
