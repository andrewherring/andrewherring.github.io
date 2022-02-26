// colors (active/inactive)
const colors = {a: "var(--turq)", i: "white" };

// opacities (active/inactive)
const opacities = {a: "1", i: "0.6" };

// top button text (active/inactive)
const tText = {a: "R&Eacute;SUM&Eacute;", i: "ANDREW W. HERRING, PH.D." };

// left button text (active/inactive)
const lText = {a: "MATHEMATICS", i: "MATH(S)" };

// right button text (active/inactive)
const rText = {a: "CYBER SECURITY", i: "CYBER" };

// create an object of objects with all of the button texts
const buttonsText = {};
  buttonsText.tbttn = tText;
  buttonsText.lbttn = lText;
  buttonsText.rbttn = rText;

// array of all button ids
buttonIds = Object.getOwnPropertyNames(buttonsText);

// create an object with paths for click events
// (likely will have to change this once uploaded)
const buttonClickPaths = {};
  buttonClickPaths.tbttn = '/home/andrew/Documents/website2/files/resume.pdf';
  buttonClickPaths.lbttn = '/home/andrew/Documents/website2/maths/maths.html';
  buttonClickPaths.rbttn = '/home/andrew/Documents/website2/cyber/cyber.html';



