// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// fib(5) // 3
// fib(10) // 34

//fib(5) = fib(4)+fib(3);
//fib(4) = fib(3)+fib(2);
//fib(3) = fib(2) + fib(1);
//fib(2) = fib(1) + fib(0)
// const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// for (let i = 2; i < fib.length; i++) {
//   console.log((fib[i] = fib[i - 1] + fib[i - 2]));
// }

const f0 = 0; //initial
const f1 = 1;

const f2 = f0 + f1;
const f3 = f2 + f1;

//const fn = f(n-1)+f(n-2);
