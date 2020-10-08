self.onmessage = function(e) {
    let userNum = Number(e.data);
    generateFibonacciSeries(userNum);
}


var results = [];

function calculateNextFibonacciValue(n) {
    var s = 0;
    var returnValue;

    if(n == 0) {
        return (s);
    }

    if (n == 1) {
        s += 1;
        return s;
    }
    else {
        return ( calculateNextFibonacciValue(n-1) + calculateNextFibonacciValue(n-2));
    }
}

function generateFibonacciSeries(n) {
    console.log("generateFibonacciSeries " + n );
    results.length = 0;
    for (let i = 0; i <= n-1; i++) {
        results.push(calculateNextFibonacciValue(i));               
    }

    // for (let index = 0; index < results.length; index++) {
    //     console.log(index + ": " + results[index]);        
    // }

    self.postMessage(results); // to post the result back to the main thread. (in this case to html file)
    
}


//addEventListener("message", messageHandler, true);

