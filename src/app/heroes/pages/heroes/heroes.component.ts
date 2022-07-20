import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../hero';
import { HeroService } from '../../../shares/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  public heroes$ = this.heroService.heroes$;
  public heroes: Hero[] = [];
  public add(name: string): void {
    const _name = name.trim();
    if (!_name) return;
    this.heroService.addHero({ name: _name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  ngOnInit(): void {
    this.heroService.fetchHeroes();
  }
}
