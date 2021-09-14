function outputNumbers(amountNumbers) {
    let arr = 1;
    for (let i = 1; i <= amountNumbers; i++) {
        let increasingArr = arr++;
        if (increasingArr % 3 === 0 && increasingArr % 5 !== 0) {
            console.log("Fizz");
        } else if (increasingArr % 5 === 0 && increasingArr % 3 !== 0) {
            console.log("Buzz");
        } else if (increasingArr % 5 === 0 || increasingArr % 3 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(increasingArr);
        }
    }
}

outputNumbers(100);