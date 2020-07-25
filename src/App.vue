<template>
  <div id="app">   
    <div id="profile-container" :style="{width: intro === true ? '35%': '0%'}">
      <transition name="fade">
        <Profile v-if="intro"/>
      </transition>
    </div>

    <div id="journeys-container" :style="{width: intro === true ? '65%': '100%'}" ref="journeysContainer">
      <transition name="fade">
        <JourneysPreview  v-if="preImage" ref="journeysPreview" @start-journeys="startJourneys"/>
        <img class="animate__animated animate__fadeIn animate__delay-1s"  id="journeysCover" src="../public/beattape-cover.jpg">
      </transition>
      
      

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
      intro: true,
      preImage: true
    };
  },
  methods: {
    startJourneys: function() {
      console.log("Starting Journeys from App")
      console.log(this.$refs['journeysContainer'])
      this.intro = false;
      // var track = new Audio("./Samsara.mp3");
      setTimeout(() => {
        this.$refs.journeysPreview.frame();
        this.$refs.journeysPreview.cleanUpArray();
        this.$refs.journeysPreview.particleRotation();
        // track.play()
      }, 2000);
      
      setTimeout(() => {
        this.preImage = false;
      }, 20000);





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
#journeys-container {
  height: 100vh;
  width: 65%;
  /* overflow: scroll; */
  transition: all 2s ease-out;
  background-color: black;
}
#journeysCover{
  width:400px;
  height:400px;
  margin-left: 200px;
  margin-top: 100px

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
