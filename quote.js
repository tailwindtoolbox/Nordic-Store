const applianceLoads = {
  tv: 50,
  ceilingFan: 80,
  lightBulb: 20,
  laptop: 100,
  phoneCharger: 10,
  fridge: 200,
  freezer: 200,
  washingMachine: 500,
  standingFan: 50,
  waterPump: 500,
  microwave: 1000,
};

const inverterMaxLoads = {
  "0.9kva": 800,
  "1.0kva": 900,
  "1.5kva": 1200,
  "2.3kva": 2000,
  "3.5kva": 3000,
};

function compareTotalLoadWithInverterMaxLoad() {
  // Compares the total load with the inverter max loads to suggest an appropriate inverter
}

function calculateLoadAndInverter() {
  // Calculates the total load in watts based on appliance quantities

  // TO:DO Add up the wattage of each appliance multiplied by its quantity

  // Display the results in the "result" div
  const maxLoadElement = document.getElementById("maxLoad");
  const suggestedInverterElement = document.getElementById("suggestedInverter");

  // Update maxLoadElement and suggestedInverterElement based on the calculations
  // Example:
  maxLoadElement.innerText = "Maximum Load: 4000 watts";
  suggestedInverterElement.innerText =
    "Suggested Inverter: 3.5kva (Max Load: 3000 watts)";

  // Show the result
  document.getElementById("result").classList.remove("hidden");
}
