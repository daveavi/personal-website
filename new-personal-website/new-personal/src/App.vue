<template>
  <div id="app">
    <Profile/>
    <JourneysPreview/>
    <router-view></router-view> 
  </div>
</template>

<script>
import Profile from './components/Profile.vue';
import JourneysPreview from './components/Journeys-Preview.vue';

export default {
  name: 'App',
  components: {
    Profile,
    JourneysPreview
  },
  methods: {

    
  }
}
</script>
<style>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
