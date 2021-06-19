
window.addEventListener("load", function() {
   // do the fetch json here
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {  
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget")
         let index = 0;
         div.addEventListener("click", function(){
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
            <img src="${json[index].image}"> `;
         index = (index + 1) % json.length;

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

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
      // event.preventDefault();
   }

   if ((typeof pilotName.value !== "string") || (typeof copilotName.value !== "string" || (typeof Number (fuelLevel.value) !== "number") || (typeof Number (cargoMass.value !== "number")))){
      // alert("Appropriate data type is required");
      // event.preventDefault();
   }
      //Put logic here to display pilot name and check for fuel level and mass input

   if (fuelLevel.value <= 10000 && cargoMass.value <= 10000){
      faultyItems.style.visibility = "visible"
      launchStatus.innerHTML = "Shuttle not ready for launch "
      launchStatus.style.color = "red"
      pilotStatus.innerHTML = `${pilotName.value} is ready`
      copilotStatus.innerHTML = `${copilotName.value} is ready`
      fuelStatus.innerHTML = "Fuel level is not enough for launch!"
      cargoStatus.innerHTML = "Cargo mass is low enough to Launch!"
   }
   if (cargoMass.value >= 10000 && fuelLevel.value >= 10000){
      faultyItems.style.visibility = "visible"
      launchStatus.innerHTML = "Shuttle not ready for launch "
      launchStatus.style.color = "red"
      pilotStatus.innerHTML = `${pilotName.value} is ready`
      copilotStatus.innerHTML = `${copilotName.value} is ready`
      fuelStatus.innerHTML = "Fuel level is enough for launch!"
      cargoStatus.innerHTML = "Cargo mass is too heavy to Launch!"
   } 
   if (cargoMass.value <= 10000 && fuelLevel.value <= 10000){
      faultyItems.style.visibility = "visible"
      launchStatus.innerHTML = "Shuttle not ready for launch "
      launchStatus.style.color = "red"
      pilotStatus.innerHTML = `${pilotName.value} is ready`
      copilotStatus.innerHTML = `${copilotName.value} is ready`
      fuelStatus.innerHTML = "Fuel level too low launch!"
      cargoStatus.innerHTML = "Cargo mass low enough to Launch!"
   }
   if (cargoMass.value >= 10000 && fuelLevel.value <= 10000){
      faultyItems.style.visibility = "visible"
      launchStatus.innerHTML = "Shuttle not ready for launch "
      launchStatus.style.color = "red"
      pilotStatus.innerHTML = `${pilotName.value} is ready`
      copilotStatus.innerHTML = `${copilotName.value} is ready`
      fuelStatus.innerHTML = "Fuel level too low launch!"
      cargoStatus.innerHTML = "There is too much mass for the shuttle to take of"
   }

   if (cargoMass.value <= 10000 && fuelLevel.value >= 10000){
      faultyItems.style.visibility = "visible"
      launchStatus.style.color = "green"
      launchStatus.innerHTML = "Shuttle is ready for launch "
      pilotStatus.innerHTML = `${pilotName.value} is ready`
      copilotStatus.innerHTML = `${copilotName.value} is ready`
      fuelStatus.innerHTML = " Fuel level is good to launch!"
      cargoStatus.innerHTML = " Cargo mass is good to launch!"
   }
   })
})
})
})
})

// This block of code shows how to format the HTML once you fetch some planetary JSON!
