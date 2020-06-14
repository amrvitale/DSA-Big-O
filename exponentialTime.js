function countTriangle(layers) {
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    };
}

console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));

//Algorithms with exponential time complexity O(2^n) have running times that grow rapidly
//with any increase in input size.
//For an input of size 2, an exponential algorithm will take 2^2=4 time
//With an input of size 10, same algo will take 2^10 = 1024 time.


//The countTriangle function is meant to count the number of points in a triangle that looks like this:
/////////////////*
////////////////* *
//////////////* * * *
//////////* * * * * * * *
///* * * * * * * * * * * * * * * *

//in this algo, we count the # of dots in a triangle with a given # of layers.
//We start at the top layer of the triangle, which is the 0th layer and has  1 dot (or you can think of it as 2^0 =1)
//As you move to the next layer, the # of dots increases by a power of 2.
//1st layer: 2^1 = 2
//2nd layer: 2^2 = 4
//By the time you're at the nth layer, the number of dots will be 2^n
//As input size increases, number of operations to count the dots increases exponentially