import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockTimeService {

  private mockDate: Date = new Date();

  getCurrentTime(): Date {
    this.mockDate.setHours(5);
    return this.mockDate;   // Avoid "return this.mockDate.setHours(5)", it returns the result produced by the method
  }

}
