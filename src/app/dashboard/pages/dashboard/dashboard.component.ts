import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../hero';
import { HeroService } from '../../../shares/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  public heroes$ = this.heroService.heroes$;

  ngOnInit(): void {
    this.heroService.fetchHeroes({
      startOf: 0,
      limit: 5,
    });
  }
}
