const panels = [
  { id: 1, city: "Guwahati", capacity_kw: 3 },
  { id: 2, city: "Delhi", capacity_kw: 8 },
  { id: 3, city: "Mumbai", capacity_kw: 1 },
];

// .map() — transform every item into something else, same length array out
// const cities = panels.map((p) => p.city);
// console.log(cities); // ["Guwahati", "Delhi", "Mumbai"]

// .map() building new objects — common pattern
// const summaries = panels.map((p) => `${p.city}: ${p.capacity_kw}kW`);
// console.log(summaries);

// // .filter() — keep only items matching a condition, array out (can be shorter)
// const bigPanels = panels.filter((p) => p.capacity_kw > 2);
// console.log(bigPanels); // Guwahati and Delhi panels only

// // .find() — get the FIRST matching item, or undefined if none — single object out, not an array
// const mumbaiPanel = panels.find((p) => p.city === "Mumbai");
// console.log(mumbaiPanel);

// const nonExistent = panels.find((p) => p.city === "Chennai");
// console.log(nonExistent); // undefined — try this, see it print

// const bigPanelCities = panels
//   .filter((p) => p.capacity_kw > 2)
//   .map((p) => p.city);

// console.log(bigPanelCities); // ["Guwahati", "Delhi"]
// const total = panels.reduce((sum, p) => sum + p.capacity_kw, 0);
// console.log(total); // 12

const result1 = panels.map((p) => console.log(p.city));
console.log(result1); // [undefined, undefined, undefined] — map always returns an array, but you didn't return anything useful

const result2 = panels.forEach((p) => console.log(p.city));
console.log(result2); // undefined — forEach never returns anything