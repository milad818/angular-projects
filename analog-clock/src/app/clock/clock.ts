import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CLOCK_CONSTANTS as cc } from './clock.constants';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock {

  // Rotation angles
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockNumbers = this.generateClockNumbers();

  generateClockNumbers(): ClockNumber[] {

    const numbers: ClockNumber[] = [];
    const centerOffset = cc.CENTER_OFFSET;
    const radius = cc.RADIUS;

    // Loop through clock numbers (1-12) to calculate their positions
    for (let n = 1; n <= 12; n++) {
      const angle = (n - 3) * cc.DEGREE_PER_HOUR * cc.DEGREE_TO_RADIAN
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
}
