import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { MessageService } from '../messages/message.service';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public getHeros(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add(`HeroService: fetched heros`);
    heros.subscribe((results) => {
      this.messageService.add(`HeroService: got the ${results.length} heros`);
    });
    return heros;
  }
  public getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find((h) => h.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) {}
}
