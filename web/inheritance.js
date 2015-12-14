/**
 * Created by gagsingh on 12/14/2015.
 */
var person = {
    name: "Gagandeep",
    age: 25,
    location: "Delhi",
    gender: "M",
    id: 101
};

//Three ways of inheritance

//1. using __proto__ property (only valid for firefox/chrome)

var gds = {
    dept: "tech",
    exp: 4,
    name: "GDS"
};

gds.__proto__ = person;
console.log("Type 1 Inheritance using __proto__")
console.log("emp.name: " + gds.name);
console.log("emp.location: " + gds.location);

//2. using Object.create() method

var harry = Object.create(person);
harry.name = "Harry";

console.log("Type 2 Inheritance using Object.create()")
console.log("harry.name: " + harry.name);
console.log("harry.location: " + harry.location);

//3. using function and Prototype method

function Employee(name) {
    this.name = name;
}

Employee.prototype = person;
var nancy = new Employee("Nancy");

console.log("Type 3 Inheritance using function and Prototype method")
console.log("nancy.name: " + nancy.name);
console.log("nancy.location: " + nancy.location);
console.log("nancy has her own property location " +nancy.hasOwnProperty('location'));
console.log("nancy has her own property name " +nancy.hasOwnProperty('name'))

//4. using a custom inherit function similar to Object.create()

function inherit(proto) {
    function F() {};
    F.prototype = proto;
    return new F();
}

var ricky =inherit(person);
ricky.name = "Ricky";

console.log("Type 4 Inheritance using a custom inherit function similar to Object.create()")
console.log("ricky.name: " + ricky.name);
console.log("ricky.location: " + ricky.location);

