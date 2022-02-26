$(document).ready(function(){

  // declare that the left button is the current button
  const currentButton = "lbttn";

  // proper format for jQuery selector
  const cB = "#" + currentButton;

  // duplicate the array buttonIds
  const nonCurrentButtons = [];
  for (i=0; i < buttonIds.length; i++){
    nonCurrentButtons[i] = buttonIds[i]
  };

  // then remove the current button to obtain nonCurrentButtons
  for (i=0; i < nonCurrentButtons.length; i++){
    if ( nonCurrentButtons[i] == currentButton ) {
    nonCurrentButtons.splice(i,1);
    }
  };

  // event handlers for all buttons
  for (let b of nonCurrentButtons){
    
    // proper format for jQuery selector
    const nCB = "#" + b;

    $(nCB).on({
      click: () => {
        location.assign(buttonClickPaths[b]);
      },
      mouseenter: () => {
        $(nCB).css({"color":colors.a, "opacity":opacities.a }).html(buttonsText[b].a);
        $(cB).css({"color":colors.i, "opacity":opacities.i });
      },
      mouseleave: () => {
        $(nCB).css({"color":colors.i, "opacity":opacities.i }).html(buttonsText[b].i);
        $(cB).css({"color":colors.a, "opacity":opacities.a })
        .html(buttonsText[currentButton].a);
      }
    });
  };
}); 


  