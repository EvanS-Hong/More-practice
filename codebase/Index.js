var pictures = document.querySelectorAll('.carousel-pictures');
var buttons = document.querySelectorAll('.fa-circle');
var buttonRow = document.querySelector('.row2');
var currentNumber = 0;

function buttonSwap(event) {
  if (event.target.matches('.fa-circle')) {
    for (var i = 0; i < buttons.length; i++) {
      if (event.target.getAttribute('id') === buttons[i].getAttribute('id')) {
        buttons[currentNumber].className = 'fa-regular fa-circle';
        pictures[currentNumber].classList.contains('hidden');
        event.target.className = "fa-solid fa-circle";
        pictures[i].classList.remove("hidden");
        currentNumber = i;
      } else {
        buttons[i].className = 'fa-regular fa-circle';
        pictures[i].classList.add("hidden");
      }
    }
  }
}

buttonRow.addEventListener('click', buttonSwap);
