// Little Canvas things
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const profileHtml = document.getElementById("profile").innerHTML;

const contentContainer = document.getElementById("content");
const profileContainer = document.getElementById("profile");

// canvas.width = parent.offsetWidth;
// canvas.height = parent.offsetHeight;
// // // Set Canvas to be window size
canvas.width = contentContainer.clientWidth;
canvas.height = contentContainer.clientHeight;

// Configuration, Play with these
var config = {
  particleNumber: 800,
  maxParticleSize: 2,
  maxSpeed: 40,
  colorVariation: 50
};

// Colors
var colorPalette = {
  bg: { r: 0, g: 0, b: 0 },
  matter: [
    { r: 255, g: 255, b: 255 }, // darkPRPL
    { r: 255, g: 255, b: 255 }, // rockDust
    { r: 255, g: 255, b: 255 }, // solorFlare
    { r: 255, g: 255, b: 255 } // totesASun
  ]
};

// Some Variables hanging out
var particles = [],
  centerX = canvas.width / 2,
  centerY = canvas.height / 2,
  drawBg,
  // Draws the background for the canvas, because space
  drawBg = function(ctx, color) {
    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

// Particle Constructor
var Particle = function(x, y) {
  // X Coordinate
  this.x = x || Math.round(Math.random() * canvas.width);
  // Y Coordinate
  this.y = y || Math.round(Math.random() * canvas.height);
  // Radius of the space dust
  this.r = Math.ceil(Math.random() * config.maxParticleSize);
  // Color of the rock, given some randomness
  this.c = colorVariation(
    colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],
    true
  );
  // Speed of which the rock travels
  this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
  // Direction the Rock flies
  this.d = Math.round(Math.random() * 360);
};

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
var colorVariation = function(color, returnString) {
  var r, g, b, a, variation;
  r = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.r
  );
  g = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.g
  );
  b = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.b
  );
  a = Math.random() + 0.5;
  if (returnString) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  } else {
    return { r, g, b, a };
  }
};

// Used to find the rocks next point in space, accounting for speed and direction
var updateParticleModel = function(p) {
  var a = 180 - (p.d + 90); // find the 3rd angle
  p.d > 0 && p.d < 180
    ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
    : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
  p.d > 90 && p.d < 270
    ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
    : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
  return p;
};

// Just the function that physically draws the particles
// Physically? sure why not, physically.
var drawParticle = function(x, y, r, c) {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};

// Remove particles that aren't on the canvas
var cleanUpArray = function() {
  particles = particles.filter(p => {
    return p.x > -100 && p.y > -100;
  });
};

var initParticles = function(numParticles, x, y) {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(x, y));
  }
  particles.forEach(p => {
    drawParticle(p.x, p.y, p.r, p.c);
  });
};

// That thing
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// Our Frame function
var frame = function() {
  // Draw background first
  drawBg(ctx, colorPalette.bg);
  // Update Particle models to new position
  particles.map(p => {
    return updateParticleModel(p);
  });
  // Draw em'
  particles.forEach(p => {
    drawParticle(p.x, p.y, p.r, p.c);
  });
  // Play the same song? Ok!
  window.requestAnimFrame(frame);
};

var showParticles = function() {
  var x = Math.random(),
    y = Math.random();
  cleanUpArray();
  initParticles(config.particleNumber, x, y);
};

// Click listener
var expandCanvas = function() {
  //  document.querySelector("content").css("width", "100");

  contentContainer.style.width = "100%";
  profileContainer.classList.remove("p-4");
  profileContainer.innerHTML = "";
  profileContainer.style.width = "0px";
  setTimeout(function() {
    canvas.width = contentContainer.clientWidth;
    canvas.height = contentContainer.clientHeight;
  }, 2000);
};

frame();
var particleInterval = setInterval("showParticles()", 2000);

var myStopFunction = function() {
  clearInterval(particleInterval);
};

//frame();
setTimeout("myStopFunction()", 20000);
cleanUpArray();

const journeysButton = document.getElementById("btn-journeys");
journeysButton.addEventListener("click", expandCanvas);

window.onresize = function() {
  console.log("Resizing window");
  canvas.width = contentContainer.clientWidth;
  canvas.height = contentContainer.clientHeight;
};
