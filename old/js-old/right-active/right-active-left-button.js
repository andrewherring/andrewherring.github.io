document.getElementById("rbttn").addEventListener("click",
  function(){ location.href='../cyber/cyber.html'; });

document.getElementById("rbttn").addEventListener("mouseover",
  function () { bChange( "rbttn", rContent.rA, 1, 'var(--turq)'); });

document.getElementById("rbttn").addEventListener("mouseout",
 function () { bChange( "rbttn", rContent.rI, 0.6, 'white' ); });

// on mouseover/mouseout of rbttn, set lbttn to inactive/active
document.getElementById("rbttn").addEventListener("mouseover", 
  function () { bChange( "lbttn", lContent.lI, 0.6, 'white'); });

document.getElementById("rbttn").addEventListener("mouseout", 
  function () { bChange( "lbttn", lContent.lA, 1, 'var(--turq)'); });