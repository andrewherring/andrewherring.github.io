const panels = [];

const flips = [];

const revealBoxes = [];

// find the number of posts = number of revealboxes
// = number of panels = number of flips
const numPosts = $(".panel").length; 

// create arrays of ids for reveal boxes, panels, and flips
for ( i=0; i < numPosts; i++ ){
  panels[i] = $(".panel")[i].id;
  flips[i] = $(".flip")[i].id;
  revealBoxes[i] = $(".revealbox")[i].id;
};

const posts= {};

// create an object (posts) whose properties are 
// ids of revealboxes, and for a given property x,
// posts.x is an array of ids for the respective 
// flip and panel elements which are chidlren of 
// revealbox x
for (i=0; i < numPosts ; i++){
  posts[revealBoxes[i]]=[flips[i], panels[i]];
};

// for each post,
for (let p in posts){

  // string formatting ids of (child)
  // flips and panels for jQuery
  const jqf = "#" + posts[p][0];
  const jqp = "#" + posts[p][1];

  // click on (child) flip to toggle (child) panel
  $(jqf).click( () => {
    $(jqp).toggle();
  });
};

