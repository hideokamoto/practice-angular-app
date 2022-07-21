import { Component, OnInit } from '@angular/core';
import { HeroListUsecase } from 'src/app/shares/hero/hero-list.usecase';
import { HeroListFilter } from 'src/app/shares/stores/state';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  constructor(private heroList: HeroListUsecase) {}
  public heroListFilter$ = this.heroList.filter$;
  public setHeroListFilter(value: HeroListFilter) {
    this.heroList.setNameFilter(value.nameFilter);
  }
  public heroes$ = this.heroList.heroes$;
  public ngOnInit(): void {
    this.heroList.fetchHeroes();
  }
}
