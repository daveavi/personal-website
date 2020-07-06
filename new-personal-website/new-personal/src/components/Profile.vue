<template>
 <div id="profile" class="p-4">
        <h1 id="profile-name" class="display-4 in-left">Avi Dave</h1>
        <h2 id="profile-description" class="in-left2">soul-seeker, beat-maker, problem-solver</h2>
        <div id="container-social-icons" class="in-left2">
            <ul>
                <li class="social-icon">
                    <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                </li>
                <li class="social-icon">
                    <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </li>
                
                <li class="social-icon">
                    <i class="fa fa-soundcloud fa-2x" aria-hidden="true"></i>
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
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap");
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#profile {
  height: 100vh;
  width: 35%;
  display: flex;
  flex-direction: column;
  transition: all 2s ease;
  justify-content: center;
}

#profile-name {
  font-weight: 800;
}

#profile-description {
  font-style: oblique;
  font-size: large;
}

#container-social-icons {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

#container-social-icons ul {
  list-style: none;
}

.social-icon {
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  /* border: 5px solid ;  */
  float: left;
  transition: all 0.2s ease-out;
}

.social-icon:hover {
  opacity: 0.65;
}

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
