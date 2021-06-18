// Write your JavaScript code here!

// window.addEventListener("load", function() {
//    let form = document.querySelector("form")
//    form.addEventListener("submit", function(event) {
//       let pilotName = document.querySelector("input[name=pilotName]");
//       let copilotName = document.querySelector("input[name=copilotName]");
//       let fuelLevel = document.querySelector("input[name=fuelLevel]");
//       let cargoMass = document.querySelector("input[name=cargoMass]");

//       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")  {

//          alert("All fields are required!");
//          event.preventDefault();
//       }
//       if ((typeof pilotName.value !== "string") || (typeof copilotName.value !== "string" || (typeof Number(fuelLevel.value) !== "number")))  {
//          alert("Appropriate data type is required");
//          // stop the form submission
//          event.preventDefault();
//       }

//    let list = document.getElementById("faultyItems")
//    list.style.visibility = "hidden"

window.addEventListener("load", function() {
   // do the fetch json here
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
   
      pilotStatus = document.getElementById("pilotStatus");
      copilotStatus = document.getElementById("copilotStatus");
      fuelStatus = document.getElementById("fuelStatus");
      cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatusCheck");
      let faultyItems = document.getElementById("faultyItems");
      //put logic here to for valid input
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")  {

      alert("All fields are required!");
   }

   if ((typeof pilotName.value !== "string") || (typeof copilotName.value !== "string" || (typeof Number(fuelLevel.value) !== "number") || (typeof Number(cargoMass.value !== "number")))){
      alert("Appropriate data type is required");
   }
   pilotStatus = document.getElementById("pilotStatus").innerHTML = `${pilotStatus} is ready`;
   copilotStatus = document.getElementById("copilotStatus").innerHTML = `${copilotStatus} is ready`;

      //Put logic here to display pilot name and check for fuel level and mass input
   if ((fuelLevel.value) <= 10000) {
      let faultyItems = document.getElementById("faultyItems")
      faultyItems.style.visibility = "visible"
   }
   if ((cargoMass.value) >= 10000){

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