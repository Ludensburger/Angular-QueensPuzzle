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

  clearBoard() {
    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        this.board[i][j] = ' ';
      }
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

  restart() {
    console.log('Restarting...');
    this.queenCount = 0;
    this.clearBoard();
    this.initializeBoard();
    this.statusMessage = '';
  }

  solutionOne() {
    // #1
    // New solution for Queen's Puzzle
    this.placeQueen(0, 3); // R1 C4
    this.placeQueen(1, 1); // R2 C2
    this.placeQueen(2, 7); // R3 C8
    this.placeQueen(3, 4); // R4 C5
    this.placeQueen(4, 6); // R5 C7
    this.placeQueen(5, 0); // R6 C1
    this.placeQueen(6, 2); // R7 C3
    this.placeQueen(7, 5); // R8 C6
  }

  solutionTwo() {
    // #2
    // Another solution for Queen's Puzzle
    this.placeQueen(0, 0); // R1 C1
    this.placeQueen(1, 4); // R2 C5
    this.placeQueen(2, 7); // R3 C8
    this.placeQueen(3, 5); // R4 C6
    this.placeQueen(4, 2); // R5 C3
    this.placeQueen(5, 6); // R6 C7
    this.placeQueen(6, 1); // R7 C2
    this.placeQueen(7, 3); // R8 C4
  }

  solutionThree() {
    // #3
    // Another solution for Queen's Puzzle
    this.placeQueen(0, 4); // R1 C5
    this.placeQueen(1, 6); // R2 C7
    this.placeQueen(2, 1); // R3 C2
    this.placeQueen(3, 5); // R4 C6
    this.placeQueen(4, 2); // R5 C3
    this.placeQueen(5, 0); // R6 C1
    this.placeQueen(6, 3); // R7 C4
    this.placeQueen(7, 7); // R8 C8
  }

  solve() {
    this.restart();
    let solutions = [
      this.solutionOne.bind(this),
      this.solutionTwo.bind(this),
      this.solutionThree.bind(this),
    ];
    solutions[Math.floor(Math.random() * solutions.length)]();
  }
}
