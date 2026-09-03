// example - 1:-
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Coffee Maker", price: 80, category: "Appliances" },
  { name: "Headphones", price: 150, category: "Electronics" },
  { name: "Running Shoes", price: 110, category: "Fitness" },
  { name: "Yoga Mat", price: 30, category: "Fitness" },
  { name: "Smartphone", price: 900, category: "Electronics" },
];

// map
// const newProducts = products.map((data) =>data.price);
// console.log(newProducts);

// const value = [10,20,40]
// console.log(value.reduce(((acc,c) => acc + c),10));

// map+reduce
// const newProducts = products.map((val) => val.price).reduce(((acc,cur)=>acc + cur),0);
// console.log(newProducts);

// filter
// const filProducts = products.filter((data) => data.price >= 200);
// console.log(filProducts );

// const redProducts = newProducts.reduce(((p,c) => p + c ),0);
// console.log(redProducts);

// example - 2:-
let arr = [
  {
    id: 1,
    name: "aa",
    price: 100,
    stock: 120,
    size: ["small", "medium", "large"],
  },
  {
    id: 2,
    name: "ab",
    price: 400,
    stock: 80,
    size: ["small", "medium", "large"],
  },
  {
    id: 3,
    name: "ac",
    price: 600,
    stock: 60,
    size: ["small", "medium", "large"],
  },
];
const newArr = arr.map((val) => val.price);
console.log(newArr);

const dataarr = arr.filter((data) => data.price >= 600);
console.log(dataarr);

const redarr = newArr.reduce((p, c) => p + c, 0);
console.log(redarr);
