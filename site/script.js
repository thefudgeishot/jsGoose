document.addEventListener("DOMContentLoaded", () => {
  idleGoose(0,0);
});
// Initial coordinates
oldHeight = 0;
oldWidth = 0;

// Random Generation
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Wait for time
function waitRandomSeconds(y, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(y);
    }, time);
  });
}

// Idle Goose function
async function idleGoose(idlePosX, idlePosY) { 
  const rndInt = randomIntFromInterval(1000, 15000) // random waiting interval
  var goose = document.querySelector(".a");
  goose.animate([
    // keyframes
    { transform: 'translateY(' + idlePosY + ') translateX(' + idlePosX + ')'}
  ], {
    // timing options
    duration: rndInt,
    iterations: 1
  });
  const y = await waitRandomSeconds(y, rndInt);
  randomAction();
}

// Determine which action to do next
function randomAction() {
  const dice = randomIntFromInterval(1, 100)
  if (dice >= 90) {
    wander();
  } else if(90 < dice >= 95){
    mud();
  } else if(95 < dice >= 100){
    photoDrag();
  }
}

// Pick random coordinates 
function makeNewPosition() {

  // Get viewport dimensions (remove the dimension of the div)
  var h = window.innerHeight - 50;
  var w = window.innerWidth - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

// Wander
async function wander() {
  var newq = makeNewPosition();
  var goose = document.querySelector(".a");
  var newHeight = (newq[0] + "px");
  var newWidth = (newq[1] + "px");
  goose.animate([
    // keyframes
    { transform: 'translateY(' + oldHeight + ') translateX(' + oldWidth + ')'},
    { transform: 'translateY(' + newHeight + ') translateX(' + newWidth + ')'}
  ], {
    // timing options
    duration: 10000,
    iterations: 1
  });
  oldHeight = (newq[0] + "px");
  oldWidth = (newq[1] + "px");
  const x = await wait10Seconds(10);
  idleGoose(oldHeight, oldWidth);
}

// Track mud
function mud() {

}

// Drag photo 
function photoDrag() {

}