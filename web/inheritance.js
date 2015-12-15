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

function getProfile() {
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
    console.log("nancy has her own property location " + nancy.hasOwnProperty('location'));
    console.log("nancy has her own property name " + nancy.hasOwnProperty('name'))

//4. using a custom inherit function similar to Object.create()

    function inherit(proto) {
        function F() {
        };
        F.prototype = proto;
        return new F();
    }

    var ricky = inherit(person);
    ricky.name = "Ricky";

    console.log("Type 4 Inheritance using a custom inherit function similar to Object.create()")
    console.log("ricky.name: " + ricky.name);
    console.log("ricky.location: " + ricky.location);

}

function getStudent() {
    //    'delete' keyword deletes a property of an object, it doesn't delete a variable or an object as a whole

    var student = {
        name: "Gagagn",
        age: 25,
        location: "Delhi"
    };

    console.log("Student's location : " + student.location)  //Delhi

    delete student;              //doesn't work
    console.log("Student's location : " + student.location)  //Delhi

    delete student.location;
    console.log("Student's location : " + student.location)   //undefined

    // 'delete' doesn't delete prototype's properties
    var engineer = Object.create(student);
    engineer.stream = "Btech";
    engineer.colg = "IIT"

    delete engineer.age;    //doesn't work
    console.log("Engineer's age : " + engineer.age)  //25
    console.log("Engineer's colg : " + engineer.colg)  //IIT

    delete engineer.colg;   //works
    console.log("Engineer's colg : " + engineer.colg)  //undefined


}

function testHoisting() {

    // If we have a global (or parent) variable declared and we declare the same inside the function again, then
    // the function never uses the value of parent (or global) variable, and its value remains undefined till the
    // the point where that variable is defined inside the function

    var salary = "1000$";

    (function () {
        console.log("Original salary was " + salary);  //here salary is undefined

        var salary = "5000$";

        console.log("My New Salary " + salary);
    })();

    (function () {
        console.log("Original salary was " + salary);  //here salary defined as there is no declaration of the same inside this function

    })();
}

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD

    var month = userDate.split("/")[0];
    var date = userDate.split("/")[1];
    var year = userDate.split("/")[2];

    if(month < 10) {
        month = "0"+month;
    }
    if(date < 10) {
        date = "0"+date;
    }
    console.log("result: "+year+month+date)
    return year+month+date;

}




