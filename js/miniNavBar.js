$("#mnbttn1").on({
  click: () => {
    location.assign("https://andrewherrring.github.io");
  }
});

$("#mnbttn2").on({
  click: () => {
    location.assign("./files/herring--genus-bounds-for-some-dynatomic-modular-curves.pdf");
  }
});

const numMNBttns = $(".mininav").children.length;

const mNBttns = [];

for (i=0; i < numMNBttns; i++){
  mNBttns[i] = "#" + $(".mininav").children()[i].id;
};

for ( let b of mNBttns ){
  $(b).on({
    mouseenter: () => {
    $(b).css({"color": "var(--turq)", "opacity": "1"});
    },
    mouseleave: () => {
      $(b).css({"color": "white", "opacity": "0.6"});
    }
  })
}
