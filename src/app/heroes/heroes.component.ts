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
  ngOnInit(): void {
    this._getHeros();
  }
}
