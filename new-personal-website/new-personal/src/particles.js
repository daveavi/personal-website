export default class Particle {
  constructor(x,y,canvas, config) {
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 1.0 + ")";
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
  }
//   varyColor(color, returnString) {
//     var r, g, b, a;
//     r = Math.round(
//       Math.random() * this.colorVariation - this.colorVariation / 2 + color.r
//     );
//     g = Math.round(
//       Math.random() * this.colorVariation - this.colorVariation / 2 + color.g
//     );
//     b = Math.round(
//       Math.random() * this.colorVariation - this.colorVariation / 2 + color.b
//     );
//     a = Math.random() + 0.5;
//     if (returnString) {
//       return "rgba(" + r + "," + g + "," + b + "," + a + ")";
//     } else {
//       return { r, g, b, a };
//     }
//   }
}