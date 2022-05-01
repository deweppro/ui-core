import { Injectable } from '@angular/core';
import { filter, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  protected _store$ = new ReplaySubject<Event>(100);

  push(v: Event) {
    this._store$.next(v);
  }

  pull(id: number): Observable<Event> {
    return this._store$.pipe(
      filter((v: Event) => {
        return v.id === id;
      })
    );
  }
}

export class Event {
  id!: number;
  value: any;
}
