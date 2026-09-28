function estimateAnnualKwh(capacityKw, sunHours) {
  return capacityKw * sunHours * 365 * 0.8;
} 
//console.log(estimateAnnualKwh(3, 5));

const crypto = require("crypto");

function buildDataProof(data) {
  const text = JSON.stringify(data);
  return crypto.createHash("sha256").update(text).digest("hex");
}
//console.log(buildDataProof({ city: "Guwahati", capacity_kw: 3 }));

function fakeFetchSunHours(lat, lon) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`(pretending to fetch sun hours for lat=${lat}, lon=${lon})`);
      resolve(4.5); // fake result
    }, 1000);
  });
}

async function buildPanelSummary({ capacityKw, lat, lon, city }) {
  const sunHours = await fakeFetchSunHours(lat, lon);
  const annualKwh = estimateAnnualKwh(capacityKw, sunHours);
  const proof = buildDataProof({ capacityKw, lat, lon, city, sunHours });

  return {
    city,
    capacityKw,
    sunHours,
    annualKwh,
    proof,
  };
}

async function main() {
  const result = await buildPanelSummary({
    capacityKw: 3,
    lat: 26.14,
    lon: 91.73,
    city: "Guwahati",
  });

  console.log(JSON.stringify(result, null, 2));
}

main();