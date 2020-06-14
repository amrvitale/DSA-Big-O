function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

console.log(efficientSearch([5,7,12, 31], 1))

    //in this example, we return to the problem of searching using a more
    //sophisticated approach than in naive search (#5).
    //Assume that the input array is always sorted.
    //What is the Big O of the algorithm? Explain your answer

    //Logarithmic time O(log(n)) because the subset to search gets smaller after each iteration.