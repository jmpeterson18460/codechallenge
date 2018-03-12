$(document).ready(readyNow);

function readyNow(){
  $('#swagger').on('click', addDom);
}

function addDom (){
  let theDivider = $('<div class="money"></div>');
  $('.content').append(theDivider);
}
