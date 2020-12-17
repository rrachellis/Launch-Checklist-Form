// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
         alert("All fields are required!");
         event.preventDefault();
         return;
      }
      if (typeof(pilotNameInput.value) !== "string" || typeof(copilotNameInput.value) !== "string") {
        alert("Please enter a non-numerical name for the pilot and/or copilot.")
        event.preventDefault();
        return;
      }
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
          alert("Please enter a number for the fuel level and/or cargo mass.")
          event.preventDefault();
          return;
      }
      document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} ready`;
      document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} ready`;
      if (cargoMassInput.value > 10000) {
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
       } else {
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
       }
       if (fuelLevelInput.value < 10000) {
         document.getElementById("fuelStatus").innerHTML = "Fuel too low for launch";
       } else {
         document.getElementById("fuelStatus").innerHTML = "Fuel high enough for launch";
       }
      if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        event.preventDefault();
        return;
      } else {
         document.getElementById("faultyItems").style.visibility = "hidden";
       document.getElementById("launchStatus").style.color = "green";
       document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
      }
   });
});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
             missionTarget.innerHTML = `
             <h2>Mission Destination</h2>
             <ol>
                <li>Name: ${json[5].name}</li>
                <li>Diameter: ${json[5].diameter}</li>
                <li>Star: ${json[5].star}</li>
                <li>Distance from Earth: ${json[5].distance}</li>
                <li>Number of Moons: ${json[5].moons}</li>
             </ol>
             <img src="${json[5].image}">
               `
      })
   })
})
