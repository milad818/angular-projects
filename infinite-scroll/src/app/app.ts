import { Component, signal } from '@angular/core';
import { PostList } from './components/post-list/post-list';

@Component({
  selector: 'app-root',
  imports: [PostList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('infinite-scroll');
}
