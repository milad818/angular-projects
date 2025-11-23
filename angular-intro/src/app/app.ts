import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  // template: `<p> Hi there! </p>`,
  templateUrl: './app.html',
  styleUrl: './app.css'
  // in-line styles go below
  // styles: ['']
})
export class App {
  protected readonly title = signal('angular-intro');
}
