import { Component, signal } from '@angular/core';
import { JokeBox } from './joke-box/joke-box';

@Component({
  selector: 'app-root',
  imports: [JokeBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rand-joke-gen');
}
