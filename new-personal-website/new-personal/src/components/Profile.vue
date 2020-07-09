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
                <li class="social-icon" id="youtube">
                  <fa-icon :icon="['fab', 'youtube']" id="icon-size"/>
                </li>
            </ul>
        </div>

        <a class="button in-left2" href="../Avi-Dave-Resume.pdf" target="_blank">Resume</a>
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
  background-color: rgb(46, 144, 229);
  box-shadow: 0px 15px 20px rgba(46, 144, 229, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
