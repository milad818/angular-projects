import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.css',
})
export class TicTacToe {

  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;
  isDraw: boolean = false;

  private isCellOccupied(idx: number): boolean {
    return this.board[idx] !== '';
  }

  private isGameOver(): boolean {
    return this.winner !== null || this.isDraw;
  }

  private isMoveInvalid(idx: number): boolean {
    return this.isCellOccupied(idx) || this.isGameOver();
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? '0' : 'X';
  }

  private checkWinner(): boolean {

    // Below are the winning combinations anticipated
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Returns true if at least one combination matches the condition
    return winningCombination.some(
      ([a, b, c]) =>
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
    );
  }

  // Check if every cell is filled
  private isBoardFull(): boolean {
    return this.board.every((cell) => cell !== '');
  }

  private updateGameState(idx: number): void {
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
    } else if (this.isBoardFull()) {
      this.isDraw = true;
    } else {
      this.switchPlayer();
    }
  }

  makeMove(idx: number): void {
    if (this.isMoveInvalid(idx)) return;
    this.board[idx] = this.currentPlayer
    this.updateGameState(idx);
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }
}
