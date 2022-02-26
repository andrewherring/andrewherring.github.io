// usual top button behavior
document.getElementById("tbttn").addEventListener("click", 
  function(){ location.href='../files/resume.pdf'; });

document.getElementById("tbttn").addEventListener("mouseover", 
  function () { bChange( "tbttn", tContent.tA, 1, 'var(--turq)'); });

document.getElementById("tbttn").addEventListener("mouseout", 
  function () { bChange( "tbttn", tContent.tI, 0.6, 'white' ); });

// on mouseover/mouseout of tbttn, set lbttn to inactive/active
document.getElementById("tbttn").addEventListener("mouseover", 
  function () { bChange( "lbttn", lContent.lI, 0.6, 'white'); });

document.getElementById("tbttn").addEventListener("mouseout", 
  function () { bChange( "lbttn", lContent.lA, 1, 'var(--turq)'); });
