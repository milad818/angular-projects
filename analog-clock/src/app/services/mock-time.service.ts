import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockTimeService {

  private mockDate: Date = new Date();

  getCurrentTime(): Date {
    this.mockDate.setHours(5); // Only hour set to 5 as default and both min and sec are taken from the system
                               // You can also set a value for all as default: .. .setHours(5, 30, 10)
    return this.mockDate;   // Avoid "return this.mockDate.setHours(5)", it returns the result produced by the method
  }

}
