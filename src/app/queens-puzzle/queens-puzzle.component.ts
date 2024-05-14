import { Component } from '@angular/core';

@Component({
  selector: 'app-queens-puzzle',
  templateUrl: './queens-puzzle.component.html',
  styleUrls: ['./queens-puzzle.component.css'],
})
export class QueensPuzzleComponent {
  title = 'PracticeProject';
  N = 8;
  queenCount = 0;
  board: string[][] = [];
  statusMessage = '';

  constructor() {
    this.initializeBoard();
  }

  initializeBoard() {
    this.board = Array.from({ length: this.N }, () => Array(this.N).fill(' '));
  }

  canPlaceQueen(row: number, col: number) {
    for (let i = 0; i < this.N; i++) {
      if (this.board[row][i] == 'Q' || this.board[i][col] == 'Q') {
        return false;
      }
      if (
        row + i < this.N &&
        col + i < this.N &&
        this.board[row + i][col + i] == 'Q'
      ) {
        return false;
      }
      if (row - i >= 0 && col - i >= 0 && this.board[row - i][col - i] == 'Q') {
        return false;
      }
      if (
        row + i < this.N &&
        col - i >= 0 &&
        this.board[row + i][col - i] == 'Q'
      ) {
        return false;
      }
      if (
        row - i >= 0 &&
        col + i < this.N &&
        this.board[row - i][col + i] == 'Q'
      ) {
        return false;
      }
    }
    return true;
  }

  placeQueen(row: number, col: number) {
    if (this.canPlaceQueen(row, col)) {
      this.queenCount++;

      for (let i = 0; i < this.N; i++) {
        if (i != col) {
          this.board[row][i] = '*';
        }

        if (i != row) {
          this.board[i][col] = '*';
        }

        if (row + i < this.N && col + i < this.N) {
          this.board[row + i][col + i] = '*';
        }

        if (row - i >= 0 && col - i >= 0) {
          this.board[row - i][col - i] = '*';
        }

        if (row + i < this.N && col - i >= 0) {
          this.board[row + i][col - i] = '*';
        }

        if (row - i >= 0 && col + i < this.N) {
          this.board[row - i][col + i] = '*';
        }
      }

      this.board[row][col] = 'Q';
      this.statusMessage = this.queenCount + ' Queen placed successfully!';
    } else {
      this.statusMessage =
        'Cannot place queen at (' + (row + 1) + ', ' + (col + 1) + ')!';
    }
  }

  checkBoard() {
    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        if (this.board[i][j] == ' ') {
          return 1;
        }
      }
    }
    return 0;
  }

  start() {
    this.initializeBoard();
    this.statusMessage = '';
  }
}
