const { buildPanelMetadata } = require("./panelService");
const { uploadMetadataToPinata } = require("./ipfsUpload");

async function main() {
  const panel = await buildPanelMetadata({
    panelId: 1,
    model: "Test-Panel",
    capacity_kw: "3",
    city: "Guwahati",
    state: "Assam",
    country: "India",
    lat: 26.14,
    lon: 91.73,
  });

  const result = await uploadMetadataToPinata(panel.metadata);
  console.log(result);
}

main();