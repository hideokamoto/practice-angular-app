import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  map,
  queueScheduler,
} from 'rxjs';
import { initialState, State } from './state';

@Injectable({
  providedIn: 'root',
})
export class Store {
  private _states$ = new BehaviorSubject<State>(initialState);

  public update(fn: (state: State) => State) {
    const current = this._states$.value;
    queueScheduler.schedule(() => {
      this._states$.next(fn(current));
    });
  }

  public select<T>(selector: (state: State) => T) {
    return this._states$.pipe(map(selector), distinctUntilChanged());
  }
}
