$(document).ready(readyNow);

let counter = 0;

function readyNow(){

  $('#swagger').on('click', addDom);
}

function addDom (){
  counter ++;
  let theDivider = $('<div class="money"><p class="bling">Number of times clicked: </div>');
  $('.content').append(theDivider);
  theDivider.append(counter);
  theDivider.append('<button class="cambio">Swap</button>');
  theDivider.append('<button class="quitarse">Delete</button>');
  $('.money').on('click', '.cambio', changeColor);
  $('.money').on('click', '.quitarse', removeDiv);
}

function changeColor (){
  let y = $(this).parent();
  y.toggleClass('highlight');
}

function removeDiv (){
  let x = $(this).parent();
  x.empty();
}
