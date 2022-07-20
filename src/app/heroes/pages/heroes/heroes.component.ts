import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../shares/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  public heroes$ = this.heroService.heroes$;
  ngOnInit(): void {
    this.heroService.fetchHeroes();
  }
}
