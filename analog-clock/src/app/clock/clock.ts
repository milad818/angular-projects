import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CLOCK_CONSTANTS as cc } from './clock.constants';
import { TimeService } from '../services/time.service'

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock implements OnInit {

  // Rotation angles
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockNumbers = this.generateClockNumbers();

  private timeService = inject(TimeService)
  private cdr = inject(ChangeDetectorRef);

  generateClockNumbers(): ClockNumber[] {

    const numbers: ClockNumber[] = [];
    const centerOffset = cc.CENTER_OFFSET;
    const radius = cc.RADIUS;

    // Loop through clock numbers (1-12) to calculate their positions
    for (let n = 1; n <= 12; n++) {
      const angle = (n - 3) * cc.DEGREES_PER_HOUR * cc.DEGREES_TO_RADIAN
      const top = centerOffset + radius * Math.sin(angle);
      const left = centerOffset + radius * Math.cos(angle);

      // Add numbers to the array
      numbers.push({
        number: n,
        position: {
          top: top,
          left: left
        }
      })
    }

    return numbers;
  }

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  // Update hands of the clock
  updateClock() {
    const now = this.timeService.getCurrentTime();
    this.hours = (now.getHours() % 12) * cc.DEGREES_PER_HOUR +
                  now.getMinutes() * cc.MINUTE_ADJUSTMENT +
                  cc.OFFSET_ROTATION;
    this.minutes = now.getMinutes() * cc.DEGREES_PER_MIN_OR_SEC +
                  now.getSeconds() * cc.SECOND_ADJUSTMENT +
                  cc.OFFSET_ROTATION;
    this.seconds = now.getSeconds() * cc.DEGREES_PER_MIN_OR_SEC +
                  cc.OFFSET_ROTATION;

    this.cdr.markForCheck();
  }
}
