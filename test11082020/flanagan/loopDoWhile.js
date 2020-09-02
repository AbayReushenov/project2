// 5.4.2 do/while
// The do/while loop is like a while loop, except that the loop expression is tested at the bottom of the loop rather than at the top. This means that the body of the loop is always executed at least once. The syntax is:
// do
// statement while (expression);
// The do/while loop is less commonly used than its while cousin—in practice, it is somewhat uncommon to be certain that you want a loop to execute at least once. Here’s an example of a do/while loop:
function printArray(a) {
    let len = a.length,
        i = 0; 
    if(len===0){
        console.log("Empty Array"); 
    } else {
        do {
            console.log(a[i]);
        } 
        while(++i < len); 
    }
}

printArray("Hello world!")

// H
// e
// l
// l
// o
 
// w
// o
// r
// l
// d
// !

// There are a couple of syntactic differences between the do/while loop and the ordi‐ nary while loop. First, the do loop requires both the do keyword (to mark the begin‐ ning of the loop) and the while keyword (to mark the end and introduce the loop condition). Also, the do loop must always be terminated with a semicolon. The while loop doesn’t need a semicolon if the loop body is enclosed in curly braces.