const fiveZeroArr = new Array(5).fill(0)
// console.log(Array.isArray(fiveZeroArr), "...arr");
// console.log(fiveZeroArr, "...array");

let arr = [1, 2, 3, 4, 5];
arr.fill(0, -2)
console.log(arr, "..arr last 2 0");

const res = Array.from({ length: 5 }, (_, ind) => ind + 1)

console.log(res, "...result");


const out = Array.from({ length: 5 }, () => {
    return Math.floor(Math.random() * 10)
})
console.log(out, "..out");


