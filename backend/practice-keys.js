const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync("ec", { namedCurve: "secp256k1" });

const message = "Mint panel #1 to Ravi";
const signature = crypto.sign("sha256", Buffer.from(message), privateKey);

console.log("A:", crypto.verify("sha256", Buffer.from(message), publicKey, signature));
console.log("B:", crypto.verify("sha256", Buffer.from("Mint panel #1 to Zoro"), publicKey, signature));

const other = crypto.generateKeyPairSync("ec", { namedCurve: "secp256k1" });
console.log("C:", crypto.verify("sha256", Buffer.from(message), other.publicKey, signature));