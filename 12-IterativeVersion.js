//Solve drills 1 - 7 from recusion checkpoint iteratively.

//1 - Counting Sheep
function countSheep(count) {
    for (let i = 0; i <= count; i++) {
        if (i < count) {
            console.log("Another sheep jump over the fence");
        } else {
            console.log("All the sheep jumped over the fence")
        }
    }
}

//console.log(countSheep(3));
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/01-countingSheep.js

//2 - Power Calculator
powerCalclator = (base, exponent) => {
    if (exponent < 0) {
        return "exponent must be >= 0"
    } else {
        return Math.pow(base, exponent)
    }
}

//console.log(powerCalclator(3,2))
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/02-powerCalculator.js

//3 - Reverse String
reversString = (str) => {
    let newStr = str.split("");
    newStr = newStr.reverse();
    return newStr.join("")
}
//console.log(reversString("hello"))
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/03-stringReverse.js

//4 - nth Triangular Number
triangularNumber = (n) => {
    return (n * (n + 1)) / 2;
}
//console.log(triangularNumber(5))
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/04-nthTriangularNumber.js

//5 - String Splitter
function stringSplitter(str, posOne, posTwo) {

    part1 = str.substring(0, posOne);
    part2 = str.substring(posOne + 1, posTwo);
    part3 = str.substring(posTwo + 1, str.length)
    return (part1 + part2 + part3);
}
//console.log(stringSplitter("02/02/2020",2,5));
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/05-stringSplitter.js

//6 - Fibonacci
fib = n => {
    let arr = [1, 2];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
        //console.log(arr)
    }
    return arr[n]
}
//fib(4)
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/06-fibonacci.js

//7 - Factorial
factorial = n => {

    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);

}
//console.log(factorial(11));
//recursive version: https://github.com/amrvitale/DSA-Recursion/blob/master/07-factorial.js