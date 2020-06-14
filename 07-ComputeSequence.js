function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
console.log(compute(8));

//What does the algorithm do? What is its runtime complexity? Explain your answer
//O(n) - linear time. This solves the fibonacci sequence.
//Linear is the most time consuming operation.
//the function loops a number of times = to value of input
//if number is 3 or larger, 
//first iteration pushes a zero into an empty array
//second iteration pushes a 1 into array
//iterations from that point forward push the sum of the 3 prior values into the array