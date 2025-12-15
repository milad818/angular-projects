import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name: string = "Tom Hanks";
  age: number = 36;
  description: string = "A young developer trying to learn Angular";
}
