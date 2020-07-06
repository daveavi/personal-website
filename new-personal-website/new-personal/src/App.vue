<template>
  <div id="app">
    <Profile/>
    <Journeys/>
  </div>
</template>

<script>
import Profile from './components/Profile.vue';
import Journeys from './components/Journeys.vue';

export default {
  name: 'App',
  components: {
    Profile,
    Journeys
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
