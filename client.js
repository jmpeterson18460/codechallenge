$(document).ready(readyNow);

let counter = 0;

function readyNow(){

  $('#swagger').on('click', addDom);
}

function addDom (){
  counter ++;
  let theDivider = $('<div class="money"></div>');
  $('.content').append(theDivider);
  createPar();
}

function createPar (){
  $('.money').empty();
  let dollars = $('<p>Number of times clicked: </p>');
  $('.money').append(dollars);
  dollars.append(counter);
}
