const crypto = require("crypto");

function hash(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

const block1 = { data: "Panel #1 owned by Asha", previousHash: "0" };
block1.hash = hash(block1.data + block1.previousHash);

const block2 = { data: "Panel #2 owned by Ravi", previousHash: block1.hash };
block2.hash = hash(block2.data + block2.previousHash);

console.log("A:", block1.hash === hash(block1.data + block1.previousHash));
console.log("B:", block2.previousHash === block1.hash);

// Someone secretly changes the old record
block1.data = "Panel #1 owned by Zoro";

console.log("C:", block1.hash === hash(block1.data + block1.previousHash));

// A clever cheater also recomputes block1's fingerprint to cover it up
block1.hash = hash(block1.data + block1.previousHash);

console.log("D:", block1.hash === hash(block1.data + block1.previousHash));
console.log("E:", block2.previousHash === block1.hash);