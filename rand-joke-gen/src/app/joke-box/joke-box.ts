import { Component, inject } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-joke-box',
  imports: [CommonModule],
  templateUrl: './joke-box.html',
  styleUrl: './joke-box.css',
})
export class JokeBox {

  jokeSetup: string = '';
  jokePunchline: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  private jokeService = inject(JokeService);
  private cdr = inject(ChangeDetectorRef);

  fetchJoke() {
    this.isLoading = true;
    this.errorMessage = '';

    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        console.log(joke)
        this.jokeSetup = joke.setup;
        this.jokePunchline = joke.punchline;
        this.isLoading = false;
        console.log(this.isLoading)
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to fetch the joke. Try again!'
        this.jokeSetup = '';
        this.jokePunchline = '';
        this.isLoading = false;
      }
    });
  }

}
