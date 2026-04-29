import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Post {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts'

  private http = inject(HttpClient);

  // APPROACH A: Old-fashioned
  getPosts(pageNumber: number, limit:number): Observable<any[]> {
    return this.http.get<any[]>(
      // Everything before the ? tells the browser where to go (e.g., the posts resource on your server).
      // : Everything after the ? is data being passed to the server to filter or modify the result.
      `${this.API_URL}?_pages=${pageNumber}&_limit=${limit}`
    );
  }

}
