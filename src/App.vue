<template>
  <div id="app">   
    <div id="profile-container" :style="{width: intro === true ? '35%': '0%'}">
      <transition name="fade">
        <Profile v-if="intro"/>
      </transition>
    </div>

    <div id="journeys-container" :style="{width: intro === true ? '65%': '100%'}" ref="journeysContainer">
      <JourneysPreview @start-journeys="startJourneys"/>
    </div>
    
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import JourneysPreview from "./components/Journeys-Preview.vue";

export default {
  name: "App",
  components: {
    Profile,
    JourneysPreview
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  data() {
    return {
      intro: true
    };
  },
  methods: {
    startJourneys: function() {
      console.log("Starting Journeys from App")
      console.log(this.$refs['journeysContainer'])
      this.intro = false;

    }
  }
  
}

</script>

<style>
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
#journeys-container {
  height: 100vh;
  width: 65%;
  /* overflow: scroll; */
  transition: all 2s ease-out;

  background-color: blue;
}



</style>


<style>
@media screen() {
  #profile-container {
  }
  #journeys-container {
  }
}
</style>
