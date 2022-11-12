export default class ClickHandler {
  constructor(boardRenderer) {
    this.boardRenderer = boardRenderer;
    this.gameboard = document.querySelector('.gameboard');
    this.scoreAmount = document.querySelector('.score-counter__score');
    this.clickOnBoard();
  }

  clickOnBoard() {
    this.gameboard.addEventListener('click', (e) => {
      if (e.target.classList.contains('goblin-img')) {
        if (+this.scoreAmount.textContent >= 5) {
          return;
        }
        this.boardRenderer.changeCell();
      }
    });
  }
}
