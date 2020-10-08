self.onmessage = function (e) {
    var args = e.data;
    if (args.Command === "start") {
        args.Message = "Your value is: " + args.Value;
        postMessage(args);
    }
}