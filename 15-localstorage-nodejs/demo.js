import { LocalStorage } from "node-localstorage";

let localStorage = new LocalStorage("/REACT/local-data");

localStorage.setItem("age", 85);
localStorage.setItem("city", "BLR");
localStorage.setItem("favTech", "React");

let age = localStorage.getItem("age");
console.log(typeof age);

const cartItems = [
  { id: 1, brand: "ASUS", cost: 500000 },
  { id: 2, brand: "LOQ", cost: 400000 },
];

let cartAsString = JSON.stringify(cartItems);
localStorage.setItem("myCart", cartAsString);

const originalArray = JSON.parse(localStorage.getItem("myCart"));
console.log(originalArray);