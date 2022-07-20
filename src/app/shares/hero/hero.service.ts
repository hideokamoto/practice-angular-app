import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { Hero } from '../../hero';
import { MessageService } from '../../messages/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private _heroesUrl = 'api/heroes';
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private _heroesSubject = new BehaviorSubject<Hero[]>([]);
  get heroes$() {
    return this._heroesSubject.asObservable();
  }
  public fetchHeroes(options?: { startOf: number; limit?: number }): void {
    this.http
      .get<Hero[]>(this._heroesUrl)
      .pipe(
        tap((heroes) => this.log(`Fetched ${heroes.length} heroes`)),
        map((heroes) => {
          if (!options) return heroes;
          return heroes.slice(options.startOf, options.limit || -1);
        }),
        catchError(this._handleError<Hero[]>('fetchHeroes', []))
      )
      .subscribe((heroes) => {
        this._heroesSubject.next(heroes);
      });
  }

  private _heroSubject = new BehaviorSubject<Hero | null>(null);
  get hero$() {
    return this._heroSubject.asObservable();
  }
  public fetchHero(id: number): void {
    this.http
      .get<Hero>(`${this._heroesUrl}/${id}`)
      .pipe(
        tap((hero) => this.log(`Fetched hero id=${id}`)),
        catchError(this._handleError<Hero | null>('fetchHero', null))
      )
      .subscribe((hero) => {
        this._heroSubject.next(hero);
      });
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  public addHero(hero: Pick<Hero, 'name'>): Observable<Hero> {
    return this.http.post<Hero>(this._heroesUrl, hero, this._httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Added hero /w id=${newHero.id}`)),
      catchError(this._handleError<Hero>('addHero'))
    );
  }
  public searchHeroes(term: string): Observable<Hero[]> {
    const trimedTerm = term.trim();
    if (!trimedTerm) return of([]);
    return this.http.get<Hero[]>(`${this._heroesUrl}/?name=${term}`).pipe(
      tap((_heroes) =>
        this.log(`Found ${_heroes.length} heroes matching ${term}`)
      ),
      catchError(this._handleError<Hero[]>(`searchHeros`, []))
    );
  }
  public deleteHero(id: number): Observable<Hero> {
    const url = `${this._heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this._httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this._handleError<Hero>('deleteHero'))
    );
  }
  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this._heroesUrl, hero, this._httpOptions).pipe(
      tap((_) => this.log(`Updatd hero id=${hero.id}`)),
      catchError(this._handleError<any>('updateHero'))
    );
  }
  public getHero(id: number): Observable<Hero | undefined> {
    const url = `${this._heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`Fetched hero id=${id}`)),
      catchError(this._handleError<Hero>(`getHero ${id}`))
    );
  }
}
