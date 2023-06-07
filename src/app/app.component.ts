import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'day3';
  myCounter = 0;
  destroy = false;

  ngOnInit(): void {
    console.log()
  }
}
