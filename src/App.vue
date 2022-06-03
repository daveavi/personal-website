<template>
  <div id="app">
    <div id="profile-container" :style="{ width: '35%' }">
      <transition name="fade">
        <Profile v-if="intro" />
      </transition>
    </div>

    <div
      id="preview-container"
      :style="{ width: '65%' }"
      ref="previewContainer"
    >
      <transition name="fade">
        <JourneysPreview
          v-if="preImage"
          ref="journeysPreview"
          @start-journeys="startJourneys"
        />
        <Journeys v-else />
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
    Journeys,
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  data() {
    return {
      intro: true,
      preImage: true,
    };
  },
  methods: {},
};
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
#preview-container {
  width: 65%;
  overflow: scroll;
  transition: all 2s ease-out;
}
</style>

<style></style>
