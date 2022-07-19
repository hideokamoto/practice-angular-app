import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from '../hero';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private _heroesUrl = 'api/heroes';
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
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
  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this._heroesUrl, hero, this._httpOptions).pipe(
      tap((_) => this.log(`Updatd hero id=${hero.id}`)),
      catchError(this._handleError<any>('updateHero'))
    );
  }
  public getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this._heroesUrl).pipe(
      tap((heroes) => this.log('Fetched heroes')),
      catchError(this._handleError<Hero[]>('getHeroes', []))
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
