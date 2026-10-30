const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect width="200" height="100" fill="orange"/></svg>';

const link = "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64");

console.log(link);