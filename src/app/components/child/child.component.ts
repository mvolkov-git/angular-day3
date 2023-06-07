import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  set counter(val: number) {
    if (val <= 10) this._counter = val;
  }
// get counter (val:  number){
//   this._counter = val;
// }
  private _counter = 0;
  show = false;

  constructor() {
    console.log('Constructor cild');
  }

  ngOnInit(): void {
    console.log('Init cild');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['counter']);
    if (changes['counter'] && changes['counter'].currentValue === 1) {
      this.show = true;
    }
  }
  ngOnDestroy(): void {
    console.log('Destroy cild');
  }
}
