$(document).ready(function(){

  // set current and non-current button colors
  const buttonColors = {};
  buttonColors.c = "var( --code-gray )";
  buttonColors.nc = "var( --st3-blck )";

  // number of code screen objects
  const numCodeScreens = $(".btn-group").length;

  // for each code screen object
  for (i=0; i < numCodeScreens; i++){

    // find the nav buttons for that code screen object
    const navButtons = $(".btn-group")[i]
      .children;

    // find the number of nav buttons for that code screen object
    const numButtons = navButtons.length;

    // array of ids of nav buttons for that code screen object
    const navButtonIds = [];

    for (j=0; j < numButtons; j++){
      navButtonIds[j] = "#" + navButtons[j].id;
    };

    // set the first nav button to have the "current" color
    $(navButtonIds[0]).css("background-color",
      buttonColors.c);

    // create an object with properties nav button ids,
    // and whose value for a given property is the id
    // of the corresponding code screen
    const codeContentIds = {};

    for ( let b of navButtonIds ){
      codeContentIds[b] = b.replace("bttn","scr");
    };

    // set default behavior for each code screen
    // object: all code screens but the first
    // are hidden by default   
    for (k=1; k < numButtons; k++){
      $(codeContentIds[navButtonIds[k]]).hide();
    };

    // define the click actions 
    for ( let bb of navButtonIds ){

      $(bb).click( () => {

        // click on a nav button to show the corresponding 
        // code screen, and then set the clicked button to have 
        // "current" color
        $(codeContentIds[bb]).show();
        $(bb).css("background-color", buttonColors.c);

        // for each button which was NOT clicked, hide the 
        // corresponding code screen, and set the background
        // color of that button to "non-current"
        for ( let bbp of navButtonIds ){
          if ( !( bbp == bb ) ){
            $(codeContentIds[bbp]).hide();
            $(bbp).css("background-color", buttonColors.nc);
          }
        }
      })
    };
  };
});
