/**
 * Created by gagsingh on 12/14/2015.
 */
var aGlobalVar = "random";

//Here the inner functions are anonymous functions that can't be called from outside
function multiply(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        };
    };
};

function callMultiply() {
    console.log("Result: " + multiply(5)(2)(3));
}

//Here the function 'inner' is a closure, and it has access to all the variables
function outer(outerArg) {
    var outerParam = 'Outer';

    ( function inner(innerArg) {
        var innerParam = 'Inner';
        console.log(
            "outerArg = " + outerArg + "\n" +
            "outerParam = " + outerParam + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerParam = " + innerParam + "\n" +
            "aGlobalVar = " + aGlobalVar);
    })(5);
}

//Read this link for detailed and good description of closures
//http://stackoverflow.com/questions/12930272/javascript-closures-vs-anonymous-functions

