document.getElementById("lbttn").addEventListener("click", 
  function () { location.href='./maths/maths.html'; });

document.getElementById("lbttn").addEventListener("mouseover", 
  function () { bChange( "lbttn", lContent.lA, 1, 'var(--turq)'); });

document.getElementById("lbttn").addEventListener("mouseout",
 function () { bChange( "lbttn", lContent.lI, 0.6, 'white' ); });