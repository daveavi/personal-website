<template>
  <div  ref="content-ref">
    <canvas ref="journeysCanvas" id="journeys-canvas" ></canvas>
    <!-- <h1 id="btn-journeys" class="animate__animated animate__fadeIn animate__delay-2s" v-on:click="expandCanvas()">Journeys</h1> -->
    
    <h1
      ref="btnJourneys"
      id="btn-journeys"
      :class="{'faded': journeysFaded}"
      class= "animate__animated animate__fadeIn animate__delay-2s"
      v-on:click="startJourneys()"
    >Journeys</h1>

  </div>
</template>

<script>
import Particle from "../Particle.js";

export default {
  name: "JourneysPreview",

  data() {
    return {
      journeysFaded: false,
      config: {
        particleNumber: 400,
        maxParticleSize: 2,
        maxSpeed: 40,
        colorVariation: 50
      },
      particles: [],
      colorPalette: {
        bg: { r: 0, g: 0, b: 0 },
        matter: [
          { r: 255, g: 255, b: 255 }, // darkPRPL
          { r: 255, g: 255, b: 255 }, // rockDust
          { r: 255, g: 255, b: 255 }, // solorFlare
          { r: 255, g: 255, b: 255 } // totesASun
        ]
      },
      requestAnimationFrame:
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
    };
  },

  computed: {
    journeysCanvas: function() {
      return this.$refs.journeysCanvas;
    },
    ctx: function() {
      return this.journeysCanvas.getContext("2d");
    }
  },

  

  mounted() {
    // this.handleResize();
    this.frame();
    // this.initParticles(this.particleNumber, 0.982123, 0.982123);
    var x = Math.random(), y = Math.random();
    this.cleanUpArray();
    this.initParticles(this.config.particleNumber, x, y);
    // this.particleInterval();
  },
  methods: {

    startJourneys() {
      this.$emit('start-journeys')
      this.journeysFaded=true
      setTimeout(() => this.$refs.btnJourneys.style.display = 'none', 200)
    },
        /**
     * Draws the background for the canvas, because space
     */
    drawBg(ctx, color) {
      ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      ctx.fillRect(0, 0, this.journeysCanvas.width, this.journeysCanvas.height);
    },

    /**
     *  Used to find the rocks next point in space, accounting for speed and direction
     */
    updateParticleModel(p) {
      var a = 180 - (p.d + 90); // find the 3rd angle
      p.d > 0 && p.d < 180
        ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
        : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
      p.d > 90 && p.d < 270
        ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
        : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
      return p;
    },
    /**
     * Remove particles that aren't on the canvas
     */
    cleanUpArray() {
      this.particles = this.particles.filter(p => {
        return p.x > -100 && p.y > -100;
      });
    },

    initParticles(numParticles, x, y) {
      console.log(x);
      console.log(y);
      for (let i = 0; i < numParticles; i++) {
        this.particles.push(
          new Particle(x, y, this.canvas, this.config, this.colorPalette)
        );
      }
      this.particles.forEach(p => {
        this.drawParticle(p.x, p.y, p.r, p.c);
      });
    },

    /**
     * Remove particles that aren't on the canvas
     * Draw background first
     */
    frame() {
      this.drawBg(this.ctx, this.colorPalette.bg);
      // Update Particle models to new position
      this.particles.map(p => {
        return this.updateParticleModel(p);
      });

      // console.log(this.particles.length);
      // Draw em'
      this.particles.forEach(p => {
        this.drawParticle(p.x, p.y, p.r, p.c);
      });
      // // Play the same song? Ok!
      // window.requestAnimationFrame(frame);
      requestAnimationFrame(this.frame);
    },

    showParticles() {
      var x = Math.random(),
        y = Math.random();
      this.cleanUpArray();
      this.initParticles(this.config.particleNumber, x, y);
    },

    drawParticle(x, y, r, c) {
      this.ctx.beginPath();
      this.ctx.fillStyle = c;
      this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.closePath();
    },

    particleInterval() {
      setInterval(() => this.showParticles(), 5000);
    },
    stopInterval() {
      clearInterval(this.particleInterval);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/animate.css";
@import "../css/journeys.css";

/* #btn-journeys {
  display: inline-block;
  padding: 0.3em;
  font-family: "Megrim";
  position: absolute;
  top: 50%;
  left: 65%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.68);
  border: 0.075em solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease-out;
}

/* #btn-journeys:hover {
  background-color: whitesmoke;
  opacity: 0.65;
  box-shadow: 0px 15px 20px rgba(46, 144, 229, 0.4);
  color: #151515;
  /* transform: translateY(-7px); */

.faded {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}


#journeys-canvas {
  background-color: #151515;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
