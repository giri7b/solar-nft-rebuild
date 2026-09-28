// console.log("Step 1: start");

// // This simulates something slow, like a network request
// setTimeout(() => {
//   console.log("Step 2: the slow thing finished");
// }, 2000);

// console.log("Step 3: this runs immediately after step 1");
// const orderFood = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Your burger is ready");
//   }, 2000);
// });

// console.log("Order placed, ticket:", orderFood);
// console.log("I can do other things while waiting");

// orderFood.then((result) => {
//   console.log("Got called back:", result);
// });
// Promise style
// function orderBurgerPromiseStyle() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Burger ready (promise style)"), 1500);
//   });
// }

// orderBurgerPromiseStyle().then((result) => console.log(result));

// // async/await style — same underlying Promise, different way of consuming it
// async function orderBurgerAsyncStyle() {
//   const result = await orderBurgerPromiseStyle();
//   console.log(result, "(but read like a normal line of code)");
// }

// console.log("A");
// orderBurgerAsyncStyle();
// console.log("B");

async function getGithubUser() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log(data.name, data.public_repos);
}

//getGithubUser();

async function getGithubUserBroken() {
  const response = await fetch("https://api.github.com/users/this-user-does-not-exist-xyz123");
  const data = await response.json();
  console.log(data.name.toUpperCase()); // this will crash if data.name is undefined
}


//getGithubUserBroken();

async function getGithubUserSafe() {
  try {
    const response = await fetch("https://api.github.com/users/this-user-does-not-exist-xyz123");
    const data = await response.json();
    console.log(data.name.toUpperCase());
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

getGithubUserSafe();