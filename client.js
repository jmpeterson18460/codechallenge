$(document).ready(readyNow);

let counter = 0;

function readyNow(){

  $('#swagger').on('click', addDom);
}

function addDom (){
  counter ++;
  let theDivider = $('<div><p>Number of times clicked: </div>');
  $('.content').append(theDivider);
  theDivider.append(counter);
  //createPar();
}

//function createPar (){
  //$('.money').empty();
  //let dollars = $('<p>Number of times clicked: </p>');
  //$('.money').append(dollars);
  //dollars.append(counter);
//}
