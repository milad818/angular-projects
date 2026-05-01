import { Component, signal } from '@angular/core';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-root',
  imports: [Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('analog-clock');
}
