const { buildPanelMetadata } = require("./panelService");

async function main() {
  const result = await buildPanelMetadata({
    panelId: 1,
    model: "Test-Panel",
    capacity_kw: "3",
    city: "Guwahati",
    state: "Assam",
    country: "India",
    lat: 26.14,
    lon: 91.73,
  });

  console.log(JSON.stringify(result, null, 2));
}

main();