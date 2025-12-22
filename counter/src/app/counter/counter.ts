import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

  counter = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
