export default class Particle {
  constructor(x,y,canvas, config,colorPalette) {
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = this.varyColor(
        colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],
        true,
        config
      );
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
  }
  varyColor(color, returnString,config) {
    var r, g, b, a;
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
  }
}