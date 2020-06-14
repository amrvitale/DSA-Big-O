function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//What is the Big O of the following algorithm? Explain your answer

//Answer: Polynomial - O(n^k), nested loops. Run times increase with larger input size.