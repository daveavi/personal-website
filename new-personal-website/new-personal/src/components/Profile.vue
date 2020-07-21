<template>
  <div class="p-4">
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

        <li class="social-icon" id="youtube">
          <fa-icon :icon="['fab', 'youtube']" id="icon-size"/>
        </li>
        <!-- <li v-for="brand in brands"  v-bind:key="brand" class="social-icon" :id="brand">
              {brand}
              <fa-icon :icon="['fab', {brand}]" id="icon-size"/>
        </li> -->

      </ul>
    </div>

    <button class="button in-left2" v-on:click="openPdf()" target="_blank">Resume</button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      brands: ["github", "linkedin", "soundcloud", "youtube"]
    };
  },
  methods: {
    openPdf() {
      window.open("./Avi-Dave-Resume.pdf", "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/profile.css";
.button {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  padding: 0;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  cursor: pointer;
  outline: none;
  /* margin-left: 50px;
  margin-top: 90px;  */
  /* position:relative; */
}

.button:hover {
  background-color: #211F1F;
  color: #fff;
  transform: translateY(-7px);
}
</style>
