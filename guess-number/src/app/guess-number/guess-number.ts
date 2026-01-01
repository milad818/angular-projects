import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-number.html',
  styleUrl: './guess-number.scss',
})
export class GuessNumber {

  secretNumber = this.generateRandomNumber();
  attemptsLeft = 5;
  guessedNumber?: number;
  feedbackMessage = '';
  gameOver = false;

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 5;


  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessNumber.MAX_NUMBER) + 1;
  }

  public isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessNumber.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Enter a number between 1 and ${GuessNumber.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess(): void {
    if(this.guessedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedbackMessage = this.guessedNumber! > this.secretNumber
      ? 'Too high! Try again.'
      : 'Too low! Try again.'
    }
  }

  private endGame(wonGame: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = wonGame
    ? 'Congrats! You guessed the correct number.'
    : `Game over! The correct number was ${this.secretNumber}.`
  }

  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessNumber.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false
  }

}
