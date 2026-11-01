const owner = "Asha";
let nextId = 0;
const records = {};

function mint(caller, to, link) {
  if (caller !== owner) {
    throw new Error("Only the owner can mint");
  }
  const id = nextId;
  nextId++;
  records[id] = { owner: to, link };
  return id;
}

console.log(mint("Asha", "Ravi", "ipfs://aaa"));
console.log(mint("Asha", "Meena", "ipfs://bbb"));

try {
  mint("Ravi", "Ravi", "ipfs://ccc");
} catch (error) {
  console.log("Rejected:", error.message);
}

console.log(records);
console.log("nextId is now:", nextId);