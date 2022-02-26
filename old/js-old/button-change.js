function bChange( bId ,bText, bOpacity, bColor ) {
  var b=document.getElementById(bId);
  b.style.color = bColor;
  b.style.opacity = bOpacity;
  b.innerHTML = bText;
};

// function release( rId,rText,rOpacity,rColor ) {
//   var r=document.getElementById(rId);
//   r.style.color = rColor;
//   r.style.opacity = rOpacity;
//   r.innerHTML = rText;
// };