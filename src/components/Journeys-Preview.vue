<template>
  <div id="template-container" ref="content-ref">
    <canvas ref="journeysCanvas" id="journeys-canvas"> </canvas>

    <transition name="fade">
      <h1
        ref="btnJourneys"
        id="btn-journeys"
        class="animate__animated animate__fadeIn animate__delay-2s"
      >
        Journeys
      </h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "JourneysPreview",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/journeys.css";
</style>
