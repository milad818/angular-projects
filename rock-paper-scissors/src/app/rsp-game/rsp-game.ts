import { Component } from '@angular/core';

@Component({
  selector: 'app-rsp-game',
  imports: [],
  templateUrl: './rsp-game.html',
  styleUrl: './rsp-game.css',
})
export class RspGame {

  // A more generic typing approach for arrays
  // choice: Array<string> = ["Rock","Paper","Scissors"];

  choices: string[] = ["Rock","Paper","Scissors"];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  // random() returns a decimal between 0 and 1
  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  // APPROACH A
  determineWinner(player: string, computer: string): string {
    if (player === computer) return "No winner, it is a tie!";
    if (
      player === "Rock" && computer === "Scissors" ||
      player === "Scissors" && computer === "Paper" ||
      player === "Paper" && computer === "Rock"
    ) {
      return "You won!";
    }
    return "You lost!";
  }

  play(choice: string) {
    this.playerChoice = choice;
    this.computerChoice = this.choices[(this.getRandomNumber(this.choices.length))]
    this.result = this.determineWinner(this.playerChoice, this.computerChoice)
  }
}

