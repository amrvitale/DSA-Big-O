function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//What is the Big O of the following algorithm? Explain your answer

//Answer: O(n) - linear, runtime relative to array length