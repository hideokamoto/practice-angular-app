import { Component, OnInit } from '@angular/core';
import { HeroListUsecase } from 'src/app/shares/hero/hero-list.usecase';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(private heroService: HeroListUsecase) {}
  public heroes$ = this.heroService.heroes$;

  ngOnInit(): void {
    this.heroService.fetchHeroes({
      startOf: 0,
      limit: 5,
    });
  }
}
