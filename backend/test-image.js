const fs = require("fs");
const { generatePanelSvg } = require("./imageGen");

const svg = generatePanelSvg({
  panelId: 1,
  city: "Guwahati",
  capacity_kw: 3,
  estimated_kwh_year: 3802,
});

fs.writeFileSync("test-output.svg", svg);
console.log("Saved test-output.svg");