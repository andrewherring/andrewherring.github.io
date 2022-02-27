$(document).ready(function(){

  // ******************************************************************
  // **********WHEN BROWSER IS POINTED TO INDEX.HTML*******************
  // ******************************************************************

  if (location.pathname == '/'){

    // set the current button to top button
    const currentButton = "tbttn";

    // proper format for jQuery selector
    const cB = "#" + currentButton;

    // duplicate the array buttonIds (from buttonProperties.js)
    const nonCurrentButtons = [];
    for (i=0; i < buttonIds.length; i++){
      nonCurrentButtons[i] = buttonIds[i]
    };

    // then remove the current button to obtain nonCurrentButtons
    for (i=0; i < nonCurrentButtons.length; i++){
      if ( nonCurrentButtons[i] == currentButton ) {
      nonCurrentButtons.splice(i,1);
      };
    };

    // set text for current button
    $(cB).text(buttonsText[currentButton].i);

    // current button event handlers
    $(cB).on({
      click: () => {
        location.assign(buttonClickPaths[currentButton]);
      },
      mouseenter: () => {
        $(cB).css({"color":colors.a }).html(buttonsText[currentButton].a);
      },
      mouseleave: () => {
        $(cB).css({"color":colors.i}).html(buttonsText[currentButton].i);
      }
    });

    // loop over non-current buttons
    for (let b of nonCurrentButtons){

      // proper format for jQuery selector
      const nCB = "#" + b;

      // set text for non-current buttons
      $(nCB).text(buttonsText[b].i);

      // non-current button event handlers
      $(nCB).on({
        click: () => {
          location.assign(buttonClickPaths[b]);
        },
        mouseenter: () => {
          $(nCB).css({"color":colors.a, "opacity":opacities.a }).html(buttonsText[b].a);
        },
        mouseleave: () => {
          $(nCB).css({"color":colors.i, "opacity":opacities.i }).html(buttonsText[b].i);
        }
      });
    };
  } 


  // ******************************************************************
  // **********WHEN BROWSER IS POINTED TO MATHS.HTML*******************
  // ******************************************************************

  else if (location.pathname == '/maths/maths.html'){

    // set the current button to left button
    const currentButton = "lbttn"; 

    // proper format for jQuery selector
    const cB = "#" + currentButton;

    // set text for current button
    $(cB).text(buttonsText[currentButton].a);

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

    // loop over non-current buttons
    for (let b of nonCurrentButtons){
      
      // proper format for jQuery selector
      const nCB = "#" + b;

      // set text for non-current buttons
      $(nCB).text(buttonsText[b].i);

      // all button event handlers
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
  } 


  // ******************************************************************
  // **********WHEN BROWSER IS POINTED TO CYBER.HTML*******************
  // ******************************************************************

  else if (location.pathname == '/cyber/cyber.html'){

    // set the current button to right button
    const currentButton = "rbttn"; 

    // proper format for jQuery selector
    const cB = "#" + currentButton;

    // set text for current button
    $(cB).text(buttonsText[currentButton].a);

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

    // loop over non-current buttons
    for (let b of nonCurrentButtons){
      
      // proper format for jQuery selector
      const nCB = "#" + b;

      // set text for non-current buttons
      $(nCB).text(buttonsText[b].i);

      // all button event handlers
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

  }
}); 