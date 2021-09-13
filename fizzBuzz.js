let a = [1];
let b = 1;
console.log(b)
for (let i = 1; i < 100; i++) {
    let c = a.push(0);
    if (c % 3 === 0 && c % 5 !== 0) {
        console.log("Fizz");
    } else if (c % 5 === 0 && c % 3 !== 0) {
        console.log("Buzz");
    } else if (c % 5 === 0 || c % 3 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(c);
    }
}
