self.onmessage = function(e) {

    if(e.data.Command === "start") {
        generateFibonacciSeries(e.data.Value);
    }

    if(e.data.Command === "close") {
        this.close();
        var args = createNewArgs("Closing worker thread");
        postMessage(args);
    }

    if(e.data.Command === "echo") {
        var args = createNewArgs(e.data.Message);
        postMessage(args);
    }
}


var results = [];

function createNewArgs(message, result) {
    return { Message: message, Result: result};
}

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
    var args = createNewArgs("Generated Fibonacci series", results);
    self.postMessage(args); // to post the result back to the main thread. (in this case to html file)
    
}


//addEventListener("message", messageHandler, true);

