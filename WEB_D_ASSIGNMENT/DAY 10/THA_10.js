const image = document.querySelectorAll('.img');
image.forEach(i => i.addEventListener('click', flipCard));

let is_fliped = 0;
let to_lock = 0;
let first,second;

function flipCard() {
  if (to_lock) return;
  if (this === first) return;

  this.classList.add('flip');

  if (!is_fliped) {
    is_fliped = 1;
    first = this;

    return;
  }

  second = this;
  match();
}

function match() {
  let is_Match = first.dataset.name === second.dataset.name;

  is_Match ? disableCards() : unflipCards();
}

function disableCards() {
  first.removeEventListener('click', flipCard);
  second.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  to_lock = 1;

  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [is_fliped, to_lock] = [0, 0];
  [first, second] = [null, null];
}