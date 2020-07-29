<template>
  <div class="p-4">
    <h1 id="profile-name" class="display-4 in-left">Avi Dave</h1>
    <h2 id="profile-description" class="in-left2">soul-seeker, beat-maker, problem-solver</h2>
    <div id="container-social-icons" class="in-left2">
      <ul>
        <li v-for="brand in brandItems" v-bind:key="brand.id" class="social-icon" :id="brand.id">
            <a :href="brand.link" :id="brand.id" class="href-class" target="_blank">
                <fa-icon :icon="['fab', brand.id]" id="icon-size"/>
            </a> 
        </li>
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
      brandItems: [
        {id:'github', link:'https://github.com/daveavi'}, 
        {id:'linkedin', link:'https://www.linkedin.com/in/avi-dave-854715164/'},
        {id:'soundcloud', link:'https://soundcloud.com/avi-dave-524207111'}, 
        {id:'youtube', link:'https://www.youtube.com/channel/UChPDyZOW04fFha6RBIBzDBQ?view_as=subscriber'}
      ]
    };
  },
  methods: {
    openPdf() {
      window.open("./Avi-Dave-Resume.pdf", "_blank");
    }
  }
};
</script>

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

}

.button:hover {
  background-color: #211F1F;
  color: #fff;
  transform: translateY(-7px);
}
.href-class{
  color:inherit;
}

</style>
