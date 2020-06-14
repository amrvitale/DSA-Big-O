function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//What is the Big O of the following algorithm? Explain your answer
//Answer: O(n) - Linear. Runtime relative to array length.