const express = require("express");
const { buildPanelMetadata } = require("./panelService");
const { uploadMetadataToPinata } = require("./ipfsUpload");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Kitchen is open" });
});

app.all("/api/panel/mintable", async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    panelId = 1,
    model = "Generic-Panel",
    capacity_kw,
    city,
    state = "",
    country = "",
    lat,
    lon,
  } = req.body || {};

  if (
    capacity_kw === undefined ||
    city === undefined ||
    lat === undefined ||
    lon === undefined
  ) {
    return res.status(400).json({
      error: "Missing required fields: capacity_kw, city, lat, lon",
    });
  }

  try {
    const panelData = await buildPanelMetadata({
      panelId, model, capacity_kw, city, state, country, lat, lon,
    });

    const { metadataUrl } = await uploadMetadataToPinata(panelData.metadata);

    res.status(200).json({ ...panelData, tokenURI: metadataUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(4000, () => {
  console.log("Server listening on http://localhost:4000");
});