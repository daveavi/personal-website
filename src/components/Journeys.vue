<template>
  <div id="journeys-container" ref="journeysContainer">
       <img class="animate__animated animate__fadeIn animate__delay-1s"  id="journeysCover" src="../../public/beattape-cover.jpg">
       <div class="description">
            <h1>Journeys is out now!</h1>
            <!-- <p> Collection of my favourite loops and instrumentals produced from Feb 2019 - March 2020.<br>
            Thank to all the artists that inspire to make the music I do make, and taking the intiative to start my journey into beat making! 
            </p> -->
       </div>


    
</div>
</template>

<script>

export default {
  name: "Journeys",
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/animate.css";
#journeys-container {
  height: 100vh;
  width: 100%;
  /* overflow: scroll; */
  transition: all 2s ease-out;
  background-color: white;
}
#journeysCover{
  width:400px;
  height:400px;
  margin-left: 150px;
  margin-top: 100px;
}
.descrition{
    display: flex;
    justify-content: flex-start;
}



</style>
