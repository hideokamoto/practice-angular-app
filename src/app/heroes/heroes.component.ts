import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  private _getHeros(): void {
    this.heroService.getHeros().subscribe((heros) => (this.heros = heros));
  }
  public heros: Hero[] = [];
  public add(name: string): void {
    const _name = name.trim();
    if (!_name) return;
    this.heroService.addHero({ name: _name } as Hero).subscribe((hero) => {
      this.heros.push(hero);
    });
  }
  ngOnInit(): void {
    this._getHeros();
  }
}
