const axios = require("axios");

const NASA_URL = "https://power.larc.nasa.gov/api/temporal/monthly/point";
const FALLBACK_SUN_HOURS = 4.0;

async function getPeakSunHours(lat, lon) {
  const year = new Date().getUTCFullYear() - 1;

  try {
    const response = await axios.get(NASA_URL, {
      params: {
        parameters: "ALLSKY_SFC_SW_DWN",
        community: "RE",
        latitude: lat,
        longitude: lon,
        start: year,
        end: year,
        format: "JSON",
      },
    });

    const monthly = response.data.properties.parameter.ALLSKY_SFC_SW_DWN;
    const annual = monthly[`${year}13`];

    if (typeof annual !== "number" || annual <= 0) {
      return FALLBACK_SUN_HOURS;
    }

    return Math.round(annual * 100) / 100;
  } catch (error) {
    console.error("NASA error, using fallback:", error.message);
    return FALLBACK_SUN_HOURS;
  }
}

module.exports = { getPeakSunHours };