import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { HeroService } from '../shares/hero/hero.service';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroListItemComponent } from './components/hero-list-item/hero-list-item.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { DeleteHeroButtonComponent } from './components/delete-hero-button/delete-hero-button.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroListItemComponent,
    HeroListComponent,
    DeleteHeroButtonComponent,
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
  exports: [HeroesComponent, HeroDetailComponent],
  providers: [HeroService],
})
export class HeroesModule {}
