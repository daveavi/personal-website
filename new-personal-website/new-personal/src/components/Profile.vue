<template>
<div id="profile" class="p-4">
        <h1 id="profile-name" class="display-4 in-left">Avi Dave</h1>
        <h2 id="profile-description" class="in-left2">soul-seeker, beat-maker, problem-solver</h2>
        <div id="container-social-icons" class="in-left2">
            <ul>
                <li class="social-icon" id="github">
                  <fa-icon :icon="['fab', 'github']" id="icon-size"/>
                </li>
                 <li class="social-icon" id="linkedin">
                  <fa-icon :icon="['fab', 'linkedin']" id="icon-size"/>
                </li>
                 <li class="social-icon" id="soundcloud">
                  <fa-icon :icon="['fab', 'soundcloud']" id="icon-size"/>
                </li>
            </ul>
        </div>

        <button class="button in-left2">Resume</button>
</div>
</template>

<script>

export default {
  name: 'Profile'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/profile.css';
</style>
