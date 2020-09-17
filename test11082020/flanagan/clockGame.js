let clock = setInterval(() => { console.clear();
    console.log(new Date().toLocaleTimeString()); }, 1000);
    // After 10 seconds: stop the repeating code above.
    setTimeout(() => { clearInterval(clock); }, 10000);

    