import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts'

  private http = inject(HttpClient);

  // APPROACH A: Old-fashioned
  // Fetch a certain number of pages and number of items per page
  getPosts(pageNumber: number, itemLimit:number): Observable<any[]> {
    return this.http.get<any[]>(
      // Everything before the ? tells the browser where to go (e.g., the posts resource on your server).
      // : Everything after the ? is data being passed to the server to filter or modify the result.
      // All based on advanced querying supported by JSON Server
      `${this.API_URL}?_pages=${pageNumber}&_limit=${itemLimit}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Something went wrong while fetching posts!'))
        })
      );
  }

  // APPROACH B: More modern and sophisticated in terms of params handling
  // getPosts(pageNumber: number, itemLimit: number): Observable<any[]> {
  //   const params = new HttpParams()
  //     .set('_pages', pageNumber)
  //     .set('_limit', itemLimit);

  //   // console.log(params);

  //   return this.http.get<any[]>(this.API_URL, { params });
  // }
}
