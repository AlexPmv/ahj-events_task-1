import BoardRenderer from './js/boardRenderer';
import ClickHandler from './js/clickHandler';
import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const newGame = new BoardRenderer();
  (() => new ClickHandler(newGame))();
});
