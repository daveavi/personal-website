<template>
  <div id="app">   

    <div id="profile-container" :style="{width: intro === true ? '35%': '0%'}">
      <transition name="fade">
        <Profile v-if="intro"/>
      </transition>
    </div>
  
    <div id="preview-container" :style="{width: intro === true ? '65%': '100%'}" ref="previewContainer">
      <transition name="fade">
        <JourneysPreview  v-if="preImage" ref="journeysPreview" @start-journeys="startJourneys"/>
        <Journeys v-else/>
      </transition>
      
      

    </div>

  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import JourneysPreview from "./components/Journeys-Preview.vue";
import Journeys from "./components/Journeys.vue";
export default {
  name: "App",
  components: {
    Profile,
    JourneysPreview,
    Journeys
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  data() {
    return {
      intro: true,
      preImage: true
    };
  },
  methods: {
    startJourneys: function() {
      this.intro = false;
      var track = new Audio("./Darjeelingtea.mp3");

      setTimeout(() => {
        // this.$refs.journeysPreview.setCanvas();
        this.$refs.journeysPreview.frame();
        this.$refs.journeysPreview.cleanUpArray();
        this.$refs.journeysPreview.initParticles();
        this.$refs.journeysPreview.setInterval();
        track.play()
      }, 2000);
      
      setTimeout(() => {
        this.preImage = false;
      }, 30000);





    }
  }
  
}

</script>

<style>
@import "css/animate.css";
#app {
  width: 100%;
  height: 100vh;
  display: flex;
}
#profile-container {
  height: 100vh;
  width: 35%;
  display: flex;
  flex-direction: column;
  transition: all 2s ease;
  justify-content: center;
  
}
#preview-container {
  height: 100vh;
  width: 65%;
  /* overflow: scroll; */
  transition: all 2s ease-out;
  background-color: black;
}



</style>


<style>
@media screen() {
  #profile-container {
  }
  #preview-container {
  }
}
</style>
