import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../stores/store.service';
import { Hero } from '../../hero';
import { MessageService } from '../../messages/message.service';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroListUsecase {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private store: Store
  ) {}
  private _heroesUrl = 'api/heroes';
  get heroes$() {
    return this.store
      .select((state) => state.heroList)
      .pipe(
        map(({ items, filter }) => {
          return items.filter((hero) => {
            if (!filter.nameFilter) return true;
            return hero.name.includes(filter.nameFilter);
          });
        })
      );
  }
  get filter$() {
    return this.store.select((state) => state.heroList.filter);
  }

  public setNameFilter(name: string) {
    this.store.update((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.heroList.filter.nameFilter = name;
      return newState;
    });
  }
  public fetchHeroes(options?: { startOf: number; limit?: number }): void {
    this.http
      .get<Hero[]>(this._heroesUrl)
      .pipe(
        tap((heroes) =>
          this.messageService.add(`Fetched ${heroes.length} heroes`)
        ),
        map((heroes) => {
          if (!options) return heroes;
          return heroes.slice(options.startOf, options.limit || -1);
        }),
        catchError(this._handleError<Hero[]>('fetchHeroes', []))
      )
      .subscribe((heroes) => {
        this.store.update((state) => ({
          ...state,
          heroList: {
            ...state.heroList,
            items: heroes,
          },
        }));
      });
  }
  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messageService.add(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
