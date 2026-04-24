import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface RandomJoke {
  setup: string,
  punchline: string
}

@Injectable({
  providedIn: 'root',
})
export class Joke {

  private apiURL = 'http://official-joke-api.appspot.com/jokes/random';

  private http = inject(HttpClient);    // Modern alternative to contructor(private http: HttpClient)

  getRandomJoke(): Observable<RandomJoke> {
    return this.http.get<RandomJoke>(this.apiURL);
  }

}
