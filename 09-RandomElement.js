function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//What is the Big O of the following algorithm? Explain your answer

//Constant time O(1) because no matter the size of the array
//it will take the same amount of time to complete.

console.log(findRandomElement([92, 41, 15, 63, 81]))