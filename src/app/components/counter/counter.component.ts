import { Component, Input, OnInit } from '@angular/core';
import { Observable , filter, Subscription, map} from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input()
  cutOff = 0;

  // subs = new Subscription();

  counter$: Observable<number> = this.service.counter$.pipe(
    filter((val) => val > 5)
  );

  //myCounter = this.service.counter;

  constructor(private service: CountService) {}

  ngOnInit(): void {}

  subtract() {
    this.service.subtract();
    // this.myCounter = this.service.counter;
  }

  add() {
    this.service.add();
    // this.myCounter = this.service.counter;
  }
}
