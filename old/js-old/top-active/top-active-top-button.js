document.getElementById("tbttn").addEventListener("click", 
  function(){ location.href='./files/resume.pdf'; });

document.getElementById("tbttn").addEventListener("mouseover", 
  function () { bChange( "tbttn", tContent.tA, 1, 'var(--turq)'); });

document.getElementById("tbttn").addEventListener("mouseout", 
  function () { bChange( "tbttn", tContent.tI, 1, 'white' ); });