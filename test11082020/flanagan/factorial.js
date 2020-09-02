function factorial(n) {
    let product = 1;
    while(n > 1) { 
        product *= n;
    n--;
    }
    return product;
}
console.log(factorial(4)) // 24

function factorial2(n) {
    let i, product = 1
    for ( i = 2; i <= n; i++) {
        product *= i
    }
    return product
}

console.log(factorial2(5)) // 120

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it. 
function factorial(x) {
    if (x <= 1) return 1;
return x * factorial(x-1);
}

   // Compute factorials and cache results as properties of the function itself.
function factorial(n) {
    if (Number.isInteger(n) && n > 0) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
        } else {
            return NaN;
        } 
}
    // Positive integers only
    // If no cached result
    // Compute and cache it
    // Return the cached result
    // If input was bad
    
factorial[1] = 1; // Initialize the cache to hold this base case. 
console.log(factorial(6)) // => 720
console.log(factorial[5]) // => 120; the call above caches this value

// Note that when we write a recursive function that we will be memoizing, 
// we typically want to recurse to the memoized version, not the original. 
const factorial = n => (n <= 1) ? 1 : n * factorial(n-1)

console.log(factorial(5)) // => 120: also caches values for 4, 3, 2 and 1.