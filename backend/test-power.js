const { getPeakSunHours } = require("./powerClient");

async function main() {
  console.log("Guwahati:", await getPeakSunHours(26.14, 91.73));
  console.log("Delhi:", await getPeakSunHours(28.61, 77.21));
  console.log("Impossible place:", await getPeakSunHours(999, 999));
}

main();