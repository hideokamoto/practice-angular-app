import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { HeroService } from '../shares/hero/hero.service';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroListItemComponent } from './components/hero-list-item/hero-list-item.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { DeleteHeroButtonComponent } from './components/delete-hero-button/delete-hero-button.component';
import { AddHeroFormComponent } from './components/add-hero-form/add-hero-form.component';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { UpdateHeroNameFormComponent } from './components/update-hero-name-form/update-hero-name-form.component';
import { HeroNameFilterComponent } from './components/hero-name-filter/hero-name-filter.component';
import { HeroListUsecase } from '../shares/hero/hero-list.usecase';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroListItemComponent,
    HeroListComponent,
    DeleteHeroButtonComponent,
    AddHeroFormComponent,
    GoBackButtonComponent,
    UpdateHeroNameFormComponent,
    HeroNameFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    ReactiveFormsModule,
  ],
  exports: [HeroesComponent, HeroDetailComponent],
  providers: [HeroService, HeroListUsecase],
})
export class HeroesModule {}
