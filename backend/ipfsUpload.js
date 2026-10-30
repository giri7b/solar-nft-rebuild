require("dotenv").config();
const axios = require("axios");

const PINATA_JWT = process.env.PINATA_JWT;

async function uploadMetadataToPinata(metadata) {
  if (!PINATA_JWT) {
    throw new Error("PINATA_JWT is missing");
  }

  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";

  const body = {
    pinataMetadata: { name: metadata.name },
    pinataContent: metadata,
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PINATA_JWT}`,
      },
    });

    const cid = response.data.IpfsHash;
    return { metadataUrl: `ipfs://${cid}`, cid };
  } catch (error) {
    console.error("Pinata upload error:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { uploadMetadataToPinata };