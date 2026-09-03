// normal function
// function hello() {
//   console.log(`hello`);
// }
// hello();

// return function

// function send() {
//   let a = "Hii";
// }
// send();

// arrgument function

// function add(a, b) {
//     // a and b are parameters (recived/get)
//   console.log("Addition of a and b is : ", a + b);
// }
// add(2, 3);
// 2and 3 are arrguments (passed/send)

// function addi(b, c) {
//   return `Addition of a and b is : ${b + c}`;
// }
// console.log(addi(5, 6));

// function mul(b, c) {
//   return `Multiplication of a and b is : ${b * c}`;
// }
// console.log(mul(5, 6));

// function div(e, f) {
//   return `Division of a and b is : ${e / f}`;
// }
// console.log(div(12, 3));

// arrow function :-
const num = (a, b) => a * b;
let times = num(2, 3);

console.log(times);
