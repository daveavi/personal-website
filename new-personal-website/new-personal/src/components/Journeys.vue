<template>
<div id="content">
        <div>
            <canvas class="content-canvas" id="content-1"></canvas>
        </div>
        <!-- <button onClick="expandCanvas()">     -->
        <!-- </button> -->
        <h1 id="btn-journeys" class="animate__animated animate__fadeIn animate__delay-2s">Journeys</h1>
</div>
</template>
<script>
export default {
  name: 'Journeys'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Megrim');

#content {
  height: 100vh;
  width: 65%;
  overflow: scroll;
  transition: all 2s ease;
  background-color: blue;
}

.content-canvas {
  background-color: #151515;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh; 
  /* for now height is 100vh, but will write javascript to get it working */
}

#btn-journeys {
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
}
.canvas {
  height: 100vh;
}
</style>