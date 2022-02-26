$(document).ready(function(){

  $("#jsbttn").css("background-color", "#696969");

  // find the number of webdev buttons
  const numWDButtons = $("#webcodebuttons").
    children().length;

  const wDButtons = [];

  // create array, wDButtons, of all webdev button ids
  for (i=0; i < numWDButtons; i++){ 
    wDButtons[i] = "#" + $("#webcodebuttons").
    children()[i].id;
  };

  const buttonColors = {};
  buttonColors.c = "rgb(105, 105, 105)";
  buttonColors.nc = "rgb(40, 41, 35)";

  const codeContent = {};
  codeContent.jsbttn = "jswebcode";
  codeContent.htmlbttn = "htmlwebcode";
  codeContent.cssbttn = "csswebcode";

  for ( let b of wDButtons ){

  	$(b).click( () => {
  		$("#"+codeContent[b.substring(1)]).show();
      $(b).css("background-color", buttonColors.c );

  		for ( let bp of wDButtons ){
  			if ( !( bp == b ) ){
          $("#"+codeContent[bp.substring(1)]).hide();
          $(bp).css("background-color", buttonColors.nc );
        };
  		};
  	});
  };

});
