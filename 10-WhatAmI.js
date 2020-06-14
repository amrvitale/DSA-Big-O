function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

//What does the following algorithm do? 
//What is the Big O of the following algorithm? Explain your answer
//function checks to see if input is not a prime number
//linear time O(n)
// given larger n, more time is taken.