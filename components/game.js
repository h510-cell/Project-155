AFRAME.registerComponent("play",{
  schema: {
   elementID: {type:"string", default:"#coin1"}
  },

  update: function(){
      this.Collided(this.data.elementID)
  },

  Collided: function(elementID){
  const element = document.querySelector(elementID)
  element.addEventListener("Collide",(e)=> {
      if(elementID.includes("#coins")) {
          console.log(elementID + "Collision")
      } else if(elementID.includes("fishes")) {
        console.log("Fish Collision")
      }
  })
  }
})