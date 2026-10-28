console.log("Step 1: start");

try {
  const panel = undefined;
  console.log(panel.city);
} catch (error) {
  console.log("Something went wrong:", error.message);
}

console.log("Step 3: end");