<template>
<div id="content">
    <link rel="stylesheet" href="https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"/>
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
/* require('vue2-animate/dist/vue2-animate.min.css') */
@import '../css/animate.css';
@import '../css/journeys.css';

</style>