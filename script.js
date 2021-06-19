
window.addEventListener("load", function() {
   // do the fetch json here
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      // event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
   
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "hidden";
      //put logic here to for valid input

   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")  {

      alert("All fields are required!");
      event.preventDefault();
   }

   if ((typeof pilotName.value !== "string") || (typeof copilotName.value !== "string" || (typeof Number(fuelLevel.value) !== "number") || (typeof Number(cargoMass.value !== "number")))){
      // alert("Appropriate data type is required");
      event.preventDefault();
   }

      //Put logic here to display pilot name and check for fuel level and mass input

   if ((fuelLevel.value) <= 10000) {
      let faultyItems = document.getElementById("faultyItems")
      faultyItems.style.visibility = "visible"
      // pilotStatus = document.getElementById("pilotStatus").innerHTML = `${pilotName} 'is ready`;
      // copilotStatus = document.getElementById("copilotStatus").innerHTML = `${copilotName} is ready`;
   }
   if ((cargoMass.value) >= 10000){
      let launchStatus = document.getElementById("launchStatus")
      launchStatus.innerHTML = "Shuttle not ready for launch "
      launchStatus.style.color = "red"
   } else{ 
      launchStatus.style.color = "green"
      launchStatus.innerHTML = "Shuttle is ready for launch "
      faultyItems.style.visibility = "visible"
   }
})
});


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