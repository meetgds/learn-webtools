/**
 * Created by gagsingh on 12/15/2015.
 */

//Any variable defined without the keyword 'var' is global, even if it is defined inside a function


(function () {
    var a =5;
    b = 10;

})();

(function () {
    var c = d = 5;

})();

//console.log("a = "+a);   //this line will give reference error since a is not global
console.log("b = "+b);     // this line prints b = 10, since b is global

/*
var c = d = 5 is compiled as
 d = 5;
 var c = d;
*/

//console.log("c = "+c);   //this line will give reference error c is not global
console.log("d = "+d);      //this works fine and prints d = 5


