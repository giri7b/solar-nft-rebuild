const text = "Hello Solar";

const encoded = Buffer.from(text).toString("base64");
console.log(encoded);

const decoded = Buffer.from(encoded, "base64").toString();
console.log(decoded);