import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Hero } from '../../hero';
import { HeroService } from '../../heroes/heroes/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  public heroes$!: Observable<Hero[]>;
  private _searchTerms = new Subject<string>();

  public search(term: string) {
    this._searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this._searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
