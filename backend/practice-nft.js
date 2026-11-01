const owner = "Asha";
let nextId = 0;
const owners = {};
const uris = {};

function mint(caller, to, uri) {
  if (caller !== owner) throw new Error("Only the owner can mint");
  const id = nextId;
  nextId++;
  owners[id] = to;
  uris[id] = uri;
  return id;
}

function ownerOf(id) {
  if (owners[id] === undefined) throw new Error("No such token");
  return owners[id];
}

function balanceOf(person) {
  return Object.values(owners).filter((o) => o === person).length;
}

function tokenURI(id) {
  return uris[id];
}

function transfer(caller, id, to) {
  if (ownerOf(id) !== caller) throw new Error("You don't own this token");
  owners[id] = to;
}

mint("Asha", "Ravi", "ipfs://aaa");
mint("Asha", "Ravi", "ipfs://bbb");
mint("Asha", "Meena", "ipfs://ccc");

console.log("1:", ownerOf(1));
console.log("2:", balanceOf("Ravi"));

transfer("Ravi", 1, "Meena");
console.log("3:", ownerOf(1));
console.log("4:", balanceOf("Ravi"), balanceOf("Meena"));

try {
  transfer("Ravi", 1, "Ravi");
} catch (error) {
  console.log("5:", error.message);
}

console.log("6:", tokenURI(0));