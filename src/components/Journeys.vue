<template>
  <div id="journeys-container" ref="journeysContainer">
       <img class="animate__animated animate__fadeInDown animate__delay-1s"  id="journeysCover" src="../../public/beattape-cover.jpg">
       <div class="description animate__animated animate__fadeInRight animate__delay-2s">
            <h1 id="promo"> Journeys is now available on 
                <a href="https://avidave.bandcamp.com/releases" class="href-class" target="_blank">
                    <fa-icon :icon="['fab', 'bandcamp']" id="bandcamp-size" />
                </a>
            </h1> 
            <br>
            <h3 id="sub-promo"> A journey illustrated through raw loops and instrumentals. Peace <fa-icon icon="hand-peace"/> </h3>
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
  height: 100%;
  width: 100%;
  /* overflow: scroll; */
  min-width: 960px;
  min-height: 960px;
  transition: all 2s ease-out;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow-x: auto;
}

#journeysCover{
  width:600px;
  height:600px;
  position:center;
  margin-left: 250px;
  margin-top: 100px;
}

.description{
    margin-bottom: 200px; 
    margin-right: 400px;
    margin-left:100px; 
    position: relative;
    /* min-width: 1000px; */
    display:flex;
    flex-direction: column;
    align-self: center;
    font-style: italic;
}

#promo{
    font-style: italic;
    font-size:70px;
}
 
#bandcamp-size:hover{
    /* background-color: black; */
    transition: all 0.2s ease-out;
    color:#629aa9; 
    outline: none;
}

.href-class{
  color:inherit;

}




</style>
