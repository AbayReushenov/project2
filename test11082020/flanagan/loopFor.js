function factorial(x) {
    // If the input argument is invalid, throw an exception! if (x < 0) throw new Error("x must not be negative");
    // 5.5 Jumps | 117
    // Otherwise, compute a value and return normally
    let f;
    for(f = 1; x > 1; f *= x, x--) /* empty */ ;
     return f;
    }
    console.log(factorial(4)) // => 24