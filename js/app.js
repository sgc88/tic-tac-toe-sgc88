// wait for the DOM to finish loading
console.log('sanity check');
var turns=0;

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $(".box").on("click", function(){

  	// X and O should take a turn with % module (even and odd- even for X, odd for O)
  	if(turns % 2 === 0){

  		$(this).text("X");
  		turns++ // increments turns variable
  	}else{

  		$(this).text("O");
  		turns++
  	}
      
      if(  $(".1").text() === "O" && $(".2").text() === "O" && $(".3").text() === "O"
        || $(".1").text() === "X" && $(".2").text() === "X" && $(".3").text() === "X"
        ){
          console.log("You win");
      }
  });
});







//$(".4")=== "O"  && $(".5")=== "O"  && $(".6")=== "O")||
//$(".7")=== "O" && $(".8")=== "O"  && $(".9")=== "O")||
//$(".1")=== "O" && $(".4")=== "O" && $(".7")=== "O")||
//$(".2")=== "O" && $(".5")=== "O" && $(".8")=== "O")||
//$(".3")=== "O" && $(".6")=== "O"  && $(".9")=== "O")||
//$(".1")=== "O" && $(".5")=== "O" && $(".9")=== "O")||
//$(".3")=== "O" && $(".5")=== "O"  && $(".7")=== "O"))
//
//||
//$(".4")=== "X" && $(".5")=== "X" && $(".6")=== "X")||
//$(".7")=== "X" && $(".8")==="X" && $(".9")=== "X")||
//$(".1")=== "X" && $(".4")==="X" && $(".7")=== "X")||
//$(".2")=== "X" && $(".5")==="X" && $(".8")=== "X")||
//$(".3")=== "X" && $(".6")=== "X" && $(".9")=== "X")||
//$(".1")=== "X" && $(".5")==="X" && $(".9")=== "X")||
//$(".3")=== "X" && $(".5")=== "X" && $(".7")=== "X")
    
    