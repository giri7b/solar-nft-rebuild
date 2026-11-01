let balance = 10;
const GAS_PRICE = 1;

function readRecord() {
  return "Panel #1 owned by Ravi";
}

function sendTransaction(gasUsed, willSucceed) {
  const fee = gasUsed * GAS_PRICE;
  if (balance < fee) {
    throw new Error("Not enough ETH for gas");
  }
  balance -= fee;
  if (!willSucceed) {
    return "Failed (but the fee was still paid)";
  }
  return "Success";
}

console.log(readRecord());
console.log("Balance:", balance);

console.log(sendTransaction(3, true));
console.log("Balance:", balance);

console.log(sendTransaction(2, false));
console.log("Balance:", balance);

try {
  sendTransaction(20, true);
} catch (error) {
  console.log(error.message);
  console.log("Balance:", balance);
}