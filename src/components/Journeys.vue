<template>
  <div id="journeys-container" ref="journeysContainer">
       <img class="animate__animated animate__fadeIn animate__delay-1s"  id="journeysCover" src="../../public/beattape-cover.jpg">
       <div class="description">
            <p id="collection"> Finally decided it was time to put out a collection of 
            my favourite loops and instrumentals I produced from Feb 2019 - March 2020. It was not until December 2018, I decided to download a digital audio workshop (software to produce music) called Ableton, and learn how to make beats.  guess when you face extreme boredom but are also in an age of discovering yourself,  creative ideas come out naturally in the process I love hip hop music ever since I was a kid and it has been a dream of mine to DJ and make beats. 
            </p>
            <h2> Journeys is avaibale to buy on bandcamp! Go check it out!</h2>
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
  min-width: 960px;
  min-height: 960px;
  transition: all 2s ease-out;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
#journeysCover{
  width:400px;
  height:400px;
  margin-left: 150px;
  margin-top: 100px;
}
.description{
    padding-bottom: 450px;
    padding-right: 400px;
    padding-left:100px;
    /* position: relative; */
    min-width: 1000px;
    display:flex;
    flex-direction: column;
    align-self: center;
}

 
/* 
#out{
    display:flex;
    align-self: center;
} */



</style>
