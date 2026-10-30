require("dotenv").config();
const axios = require("axios");

async function main() {
  const jwt = process.env.PINATA_JWT;

  if (!jwt) {
    console.log("PINATA_JWT is missing from .env");
    return;
  }

  const response = await axios.get("https://api.pinata.cloud/data/testAuthentication", {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  console.log(response.data);
}

main();