$(document).ready(readyNow);

let counter = 0;

function readyNow(){

  $('#swagger').on('click', addDom);
}

function addDom (){
  counter ++;
  let theDivider = $('<div><p>Number of times clicked: </div>');
  $('.bling').append(theDivider);
  theDivider.append(counter);
  theDivider.append('<button id="changeo">Swap</button>');
  theDivider.append('<button id="garbage">Delete</button>');
  $('#changeo').on('click', changeColor);
  $('.bling').on('click', '#garbage', removeDiv);
}

function changeColor (){
  $('.bling').css('background-color', 'yellow');
}

function removeDiv (){
  let x = $(this).parent().parent();
  x.empty();
}
