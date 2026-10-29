const axios = require("axios");

async function main() {
  const response = await axios.get(
    "https://power.larc.nasa.gov/api/temporal/monthly/point",
    {
      params: {
        parameters: "ALLSKY_SFC_SW_DWN",
        community: "RE",
        latitude: 26.14,
        longitude: 91.73,
        start: "2025",
        end: "2025",
        format: "JSON",
      },
    }
  );

  console.log(JSON.stringify(response.data.properties.parameter, null, 2));
  console.log("Units:", response.data.parameters?.ALLSKY_SFC_SW_DWN?.units);
    const monthly = response.data.properties.parameter.ALLSKY_SFC_SW_DWN;
  const keys = Object.keys(monthly);
  console.log("Keys:", keys);
  console.log("How many:", keys.length);

    const monthKeys = keys.filter((key) => !key.endsWith("13"));
  console.log("Month keys:", monthKeys.length);

  const values = monthKeys.map((key) => monthly[key]);
  console.log("Values:", values);

  const sum = values.reduce((total, v) => total + v, 0);
  const average = sum / values.length;
  console.log("Average sun hours:", average);
}

main();