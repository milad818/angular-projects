import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss',
})
export class Stopwatch {

  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;

  // ChangeDetectorRef is declared in the constructor, because ChangeDetectorRef is a service, not data
  // It is managed by Angular, context-specific to the component instance
  // It is also provided via Dependency Injection (DI), so Angular must inject it
  constructor(private cdr: ChangeDetectorRef) {}

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
      // Angular does not automatically detect changes caused by: setInterval, setTimeout, and some external APIs
      this.cdr.markForCheck();  // without marking, elapsedTime updates internally (the UI does not re-render)
      console.log(this.elapsedTime);
    }, 100);
    console.log('Stopwatch started.')
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch stopped!')
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log('Stopwatch reset.')
  }

}
