export default class BoardRenderer {
  constructor() {
    this.itemCellArray = document.querySelectorAll('.item-cell');
    this.scoreAmount = document.querySelector('.score-counter__score');
    this.hammerCursor = document.querySelector('.hammer-img');
    this.resetBtn = document.querySelector('.reset-link');
    this.activateCustomSursor();
    this.createGoblinElement();
    this.changeCell();
  }

  createGoblinElement() {
    this.goblinElement = document.createElement('img');
    this.goblinElement.classList.add('goblin-img');
    this.goblinElement.src = './src/img/goblin.png';
  }

  activateCustomSursor() {
    const positionElement = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      this.hammerCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', positionElement);
  }

  getRandomFlag() {
    const flag = Math.floor(Math.random() * (this.itemCellArray.length - 1));

    if (this.currentFlag === flag) {
      this.getRandomFlag();
    } else {
      this.currentFlag = flag;
    }
  }

  changeCell() {
    clearInterval(this.interval);
    this.getRandomFlag();
    this.itemCellArray[this.currentFlag].appendChild(this.goblinElement);

    this.interval = setInterval(() => {
      this.scoreAmount.textContent++;

      if (this.scoreAmount.textContent === '5') {
        clearInterval(this.interval);
        this.resetBtn.classList.toggle('hidden');
        return;
      }

      this.getRandomFlag();
      this.itemCellArray[this.currentFlag].appendChild(this.goblinElement);
    }, 1000);
  }
}
