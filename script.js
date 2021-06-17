// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")  {

         alert("All fields are required!");
         event.preventDefault();
      }
      if ((typeof pilotName.value !== "string") || (typeof copilotName.value !== "string" ))  {
         alert("Appropriate data type is required");
         // stop the form submission
         event.preventDefault();
      }
      
   })
   const update  = function () {
      let faultyItems = document.getElementById("faultyItems")
      faultyItems.style.visibility = "visible"
      // faultyItems.innerHTML =
      // `    
      // <ol id="faultyItems${faultyItems.name}">
      //   <li>pilotStatus: ${faultyItems.pilotStatus}</li>
      //   <li>copilotStatus: ${faultyItems.copilotStatus}</li>
      //   <li>fuelStatus: ${faultyItems.fuelStatus}</li>
      //   <li>cargoStatus: ${faultyItems.cargoStatus}</li>
      // </ol>`;
      } 
   if (Number(fuelLevel.value) <= 10000 || Number(cargoMass.value) >= 10000){
         console.log(update());
         event.preventDefault();
   }
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
