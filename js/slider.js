
var next = 1;
var num = $('#slider img').size();

function slide(){

  $('.'+next).show("slide",{direction:"right"},500);

  setTimeout(function(){
    $('.'+next).hide("slide",{direction:"left"},500);
    if(next === num){
      next = 1;
    }else{
      next = next+1;
    }
    slide();

  },2000);

};

$(document).ready(function(){
  
  slide();

  console.log('done ooh');

});