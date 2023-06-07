import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  counter = 10;

  private counterSubject = new BehaviorSubject<number>(this.counter);

  get counter$(): Observable<number> {
    return this.counterSubject.asObservable();
  }

  subtract() {
    this.counter--;
    this.counterSubject.next(this.counter);
  }

  add() {
    this.counter++;
    this.counterSubject.next(this.counter);
  }
}
