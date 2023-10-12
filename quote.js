function calculateLoadAndInverter() {
  // Calculates the total load in watts based on appliance quantities

  const applianceLoads = {
    tv: 100,
    cableDecoder: 30,
    ceilingFan: 80,
    lightBulb: 15,
    standingFan: 50,
    waterPump: 500,
    freezer: 200,
    refrigerator: 300,
    inverterAC: 800,
    mediumIndustrialFan: 500,
    computerSet: 100,
    cctvCamera: 10,
    phoneCharger: 10,
    washingMachine: 500,
  };

  let totalLoad = 0; // The total load in watts

  function compareTotalLoadWithInverterMaxLoad() {
    // Compares the total load with the inverter max loads to suggest an appropriate
    if (totalLoad <= 750) {
      return "0.9kva";
    } else if (totalLoad <= 800) {
      return "1.0kva";
    } else if (totalLoad <= 1200) {
      return "1.5kva";
    } else if (totalLoad <= 2000) {
      return "2.3kva";
    } else if (totalLoad <= 3000) {
      return "3.5kva";
    } else if (totalLoad > 3000) {
      return "Exceeds our inverter capacity";
    }
  }

  // TO:DO Add up the wattage of each appliance multiplied by its quantity
  for (const appliance in applianceLoads) {
    const quantity = parseInt(document.getElementById(`${appliance}`).value);
    if (quantity > 0) {
      totalLoad += quantity * applianceLoads[appliance];
    }
  }

  // Display the results in the "result" div
  const maxLoadElement = document.getElementById("maxLoad");
  const suggestedInverterElement = document.getElementById("suggestedInverter");

  // Update maxLoadElement and suggestedInverterElement based on the calculations
  const suggestedInverter = compareTotalLoadWithInverterMaxLoad();
  maxLoadElement.innerText = `Maximum Load: ${totalLoad}`;
  suggestedInverterElement.innerText = `Suggested Inverter: ${suggestedInverter}`;

  // Show the result
  document.getElementById("result").classList.remove("hidden");
}
