<template>
  <div id="template-container" ref="content-ref">
    <canvas ref="journeysCanvas" id="journeys-canvas" >
    </canvas>

    <transition name="fade">
      <h1
        ref="btnJourneys"
        id="btn-journeys"
        class= "animate__animated animate__fadeIn animate__delay-2s"
        v-on:click="startJourneys()"
        v-if="journeysFadeIn"
      >Journeys</h1>
    </transition>

    


  </div>
</template>

<script>
import Particle from "../Particle.js";

export default {
  name: "JourneysPreview",
  data() {
    return {
      journeysFadeIn: true,
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
        window.msRequestAnimationFrame,
      particleInterval: null,
      journeysImage: '<img src="./beattape-cover.jpg">',
    };
  },

  computed: {
    journeysCanvas: function() {
      return this.$refs.journeysCanvas;
    },
    ctx: function() {
      return this.journeysCanvas.getContext("2d");
    },

    journeysContainer: function(){
      return this.$refs["content-ref"]
    }
  },

  

  mounted() {

    this.journeysCanvas.width = this.journeysContainer.clientWidth
    this.journeysCanvas.height = this.journeysContainer.clientHeight

    this.frame();
    this.cleanUpArray();

    
    this.particleRotation();
    

  },
  methods: {

    startJourneys() {
      this.$emit('start-journeys')
      this.journeysFadeIn=true
      this.stopInterval();
      // this.startNewCanvas()
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

      // Draw em'
      this.particles.forEach(p => {
        this.drawParticle(p.x, p.y, p.r, p.c);
      });
      
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

    setInterval() {
      this.particleInterval = setInterval(() => this.showParticles(), 5000);
    },

    stopInterval() {
      clearInterval(this.particleInterval);
    },

    particleRotation(){ 
      var x = Math.random(), y = Math.random();
      setTimeout(()=>{
        this.initParticles(this.config.particleNumber, x, y);
      },2000);

      this.setInterval();
      setTimeout(()=>{
          this.stopInterval()
        }, 20000);
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/animate.css";
@import "../css/journeys.css";
</style>
