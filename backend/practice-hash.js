const crypto = require("crypto");

function fingerprint(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

console.log(fingerprint("3 kW Guwahati"));
console.log(fingerprint("4 kW Guwahati"));
console.log(fingerprint("3 kW Guwahati"));