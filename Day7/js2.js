// NAMING CONVENTION in JAVASCRIPT --> camelCase

// console.log("Hello body end"); // cout, printf, system.out

// JS started as INTERPRETED LANGUAGE: No blocking time, No-Optimization-scope
// C++: Compiled (blocking during compiling), OPTIMIZED

// JS --> Modern Browsers --> JIT (Just in time Compilation)

// -----------------------------------------------------------------------

// // HOW THE PROGRAM RUNs?
// // 1. MEMORY ALLOCATION (line by line) (Only checks for variable and function DECLARATIONs)
// // 2. Execution (++) (line by line) (Executes the logic)

// // memory allocated for upcoming variable "city" = "Delhi"
// // memory allocated for upcoming variable "country" = "India"

// var city = "Delhi"; // memory allocated for upcoming variable "city" = undefined
// console.log(city); // Delhi

// console.log(country); // undefined
// var country = "India";

// console.log(state); // --> STATE is not defined

// // VAR : Industry standard says: avoid using VAR
// // Oldest keyword
// // function SCOPED
// // if you access it before initialization
// // --> "undefined" if the variable is declared after this line
// // --> "Reference Error: ... not defined" if the variable is not at all declared anywhere in the code
// // Redeclaration ALLOWED :  VERY BAD as the industry standard

// -------------------------------------------------------------------------------------

// var city = "Delhi";
// console.log(city);

// var city = "Mumbai";
// console.log(city);

// --------------------------------------------------------------------------------------

// LET and CONST introduction in JS: 2015 when *ES6* was launched (also known as ECMAScript 2015)
// GTA 5 --- GTA 2024

// --------------------------------------------------------------------------------------

// // LET
// // IT CANNOT be RE-DECLARED
// // It is block scoped
// // They are hoisted differently (in temporal dead zone)

// // // 1. MEMORY ALLOCATION (line by line) (Only checks for variable and function DECLARATIONs)
// // // 2. Execution (++) (line by line) (Executes the logic)

// // TEMPORAL DEAD ZONE (TDZ): LET variable will come with name "city"
// // TEMPORAL DEAD ZONE: LET variable will come with name "country"
// // TEMPORAL DEAD ZONE variables can be accessed before initialization

// let city = "Delhi"; // city = "Delhi"
// console.log(city); // Delhi

// console.log(country);
// let country = "India"; // country = "India"
// // let country === DECLARATION part
// // = 'India' === INITIALIZATION part

// // let city = 123;

// ----------------------------------------------------------------------------------------------

// // CONST
// // IT CANNOT be RE-DECLARED
// // It is block scoped
// // They are hoisted differently (in temporal dead zone)
// // IT CANNOT BE RE-ASSIGNED

// const city = "Delhi"; // declaration + initialization
// console.log(city);

// const country = "India";
// console.log(country);

// city = "Mumbai"; // re-assignment (It is allowed in LET but NOT Allowed in const)
// console.log(city);

// ----------------------------------------------------------------------------------------------

// DATATYPES
// __________PRIMITIVE_____________
// * String --> '', "", ~new String()~
// * Number --> write number
// Bigint --> X
// * Boolean --> true or false
// Undefined --> X
// Null --> X
// Symbol --> X
// __________NON-PRIMITIVE_____________
// * Object

// let city = "delhi";
// let pinCode = 441122; // camelCase, programmingPathshala, codeEditor, isUserDefined
// let isUserDefined = false;
// let data = {}; // Don't worry, we will see it after sometime
// let fruits = []; // Don't worry, we will see it after sometime

// ----------------------------------------------------------------------------------------------
// name, console, document, window, setTimeout, ............

// ---------------------------------------------------------------------
// Strict X, Loosely typed :: when it does not require the explicit specification of different types of objects and variables
// Static X, Dynamically typed :: (change of datatype of variable during re-assignment is allowed)
//                             :: if i assign string to a variable and in-future i assign the same variable with array, it works fine
// const cty = 'Delhi'
// console.log(city);
// city = {};
// console.log(city);

// -----------------------------------------------------
// console.log(typeof city);
// console.log(typeof pinCode);
// console.log(typeof isUserDefined);
// console.log(typeof data);
// console.log(typeof fruits);
// -----------------------------------------------------

// TYPE coercion
// BY DEFAULT : +, -, *, / do the arithmetic computations
// BUT : + also does string concatenation

// const city = "Delhi";
// const country = "India";

// const address = city + ", " + country;
// console.log(address);

// -----------------------------------------------------------------
// ----------- NOW there is confusion with "+"
// ------> SO, if both the operands are NUMBERS then it does ARITHMETIC otherwise it does coercion
// ------> If at least one of the operand is string, then it will ALWAYS do string concatenation

// const ans1 = 10 + 30;
// console.log(ans1); // --> 40

// const ans2 = 10 + "Hello";
// console.log(ans2); // --> 10Hello

// const ans3 = "Hello" + 10;
// console.log(ans3); // --> Hello10

// const ans4 = "Hello" + " All!";
// console.log(ans4); // --> Hello All!

// const ans5 = "10" + "20";
// console.log(ans5); // 1020

// const ans6 = 10 + "20";
// console.log(ans6); // 1020

// const ans7 = 10 + 20;
// console.log(ans7); // 1020

// --------------------------------------------------------
// If any other ARITHMETIC OPERATOR is used like -, * , /
// It will give NaN for such not meaningful cases

// -----------------------------------------------------

// const ans1 = 30 - 10;
// console.log(ans1); // --> 20

// const ans2 = 10 - "Hello";
// console.log(ans2); // --> NaN

// const ans3 = "Hello" - 10;
// console.log(ans3); // --> NaN

// const ans4 = "Hello" - " All!";
// console.log(ans4); // --> NaN

// const ans5 = "90" - "10"; // --> 90 - 10
// console.log(ans5); // 80

// const ans6 = 20 - "10"; // --> 20 - 10
// console.log(ans6); // 10

// const ans7 = 50 - 20;
// console.log(ans7); // 30

// -----------------------------------------------------

// LOOSE Equality --> checks with type coercion (PRIMITIVES)

// const city = "Delhi";
// const country = "INDIA";

// if (city == country) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// const nnS = "99";
// const nN = 99;

// if (nnS == nN) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// const nnS = false;
// const nN = 0;

// if (nnS == nN) {
//     console.log("Yes 0 is equal to false");
// } else {
//     console.log("No");
// }

// FALSE VALUES: false, [], {}, 0, ""
// TRUTH VALUES: true, ['a'], {a:'c'}, +1, -1, "a"

// if (2 == true) {
//     console.log("Yes");
// }

// -----------------------------------------------------------------------
// const nnS = "99";
// const nN = 99;
// const yes = true;
// const no = false;
// const one = 1;
// const zero = 0;

// if (nnS === nN) {
//     console.log("nnS nN");
// } else {
//     console.log("no");
// }

// if (yes === one) {
//     console.log("one yes");
// } else {
//     console.log("no");
// }

// if (no === zero) {
//     console.log("one yes");
// } else {
//     console.log("no");
// }

// STRICT EQUALITY (Primitives) --> If both have same data type, then compares the values
//                              --> if values are same then true else false

// ---------------------------------------------------------------------------------

// ES6 - Template Literals

// const city = "Delhi";
// const country = "India";

// const greetings1 = "Namaste!";

// const ans1 = greetings1 + " " + city + ", " + country;

// const ans2 = `${greetings1} ${city}, ${country}`;

// console.log(ans1);
// console.log(ans2);

// -----------------------------------------------------------------------------------
// const likes = 22;
// const hearts = 34;

// const profileName = "Harshal";
// const sentence = "profile has ";
// const lastWord = "engagements";

// const ans = profileName + "'s " + sentence + likes + hearts + " " + lastWord;
// console.log(ans);
// const ans2 = `${profileName}'s ${sentence}${likes + hearts} ${lastWord}`;
// console.log(ans2);

// -------------------------------------------------------------------------------

// if industry standards says, this should be done like this
// if industry standards says, this MUST be done like this

// -------------------------------------------------------------------------------------

// OBJECT + Function

// ---------------------------------------------------------------------------------------

// 1. FUNCTION DECLARATION --> allows to make the two functions with same name 🚩
//                         --> it can be invoked before declaration 🚩

// -------------------------------

// function greetings() {
//     // logic
//     console.log("hello all!");
// }

// greetings(); // function call or function invocation

// ---------------------------------
// Memory allocation and execution

// greetings(); // function call or function invocation

// function greetings() {
//     // logic
//     console.log("hello all!");
// }

// // ................250 lines................

// function greetings() {
//     // logic
//     console.log("hello again!");
// }

// INDUSTRY says: this is an abrupt behavior, other languages don't work like that, so people can get confused

// ------------------------------------------------------------------------------------------------

// FUNCTION ASSIGNMENT (*)
// -------------------------
// const temp = function greetings() {
//     console.log("Hello all again!");
// };

// temp();

// ----------------------------

// IT CANNOT BE ACCESSED BEFORE INITIALIZATION (this is how CONST works!)
// temp();

// const temp = function greetings() {
//     console.log("Hello all again!");
// };

// --------------------------

// RE-DECLARATION NOT allowed (this is how CONST works!)

// const temp = function greetings() {
//     console.log("Hello all again!");
// };
// const temp = function greetings() {
//     console.log("Hello all again and again!");
// };

// -----------------------------------------------------------------------------------------

// anonymous FUNCTION ASSIGNMENT (GIVES same benefits as earlier with shorter syntax)
// const temp = function () {
//     console.log("Hello all again!");
// };

// temp();

// -------------------------------------------------------------------------------------------

// arrow FUNCTION ASSIGNMENT (GIVES same benefits as earlier with shorter syntax)
// const temp = () => {
//     console.log("Hello all again!");
// };

// temp();

// --------------------------------------------------------------------------------------------

// functions are used to group the logic
// function printDataOnScreen(likes, hearts, name) {
//     // PARAMETERs
//     const result = `${name}'s engagements on the page are ${likes + hearts}`;
//     console.log(result);
// }

// const printDataOnScreen = function printDataOnScreen(likes, hearts, name) {
//     // PARAMETERs
//     const result = `* ${name}'s engagements on the page are ${likes + hearts}`;
//     console.log(result);
// };

// const printDataOnScreen = function (likes, hearts, name) {
//     // PARAMETERs
//     const result = `** ${name}'s engagements on the page are ${likes + hearts}`;
//     console.log(result);
// };

// const printDataOnScreen = (likes, hearts, name) => {
//     // PARAMETERs
//     const result = `*** ${name}'s engagements on the page are ${likes + hearts}`;
//     console.log(result);
// };

// printDataOnScreen(33, 44, "Niteesh"); // Arguments
// printDataOnScreen(220, 100, "Aashrith"); // Arguments

// -------------------------------------------------------------------------

// BLOCK SCOPE & FUNCTION SCOPE

// ------------------
// const greet = () => {
//     var x = 10;

//     console.log(x);
// };

// greet();

// ------------------
// SCOPE of var is "FUNCTION scoped"
// const greet = () => {
//     if (true) {
//         var x = 12;
//     }

//     console.log(x);
// };

// greet();

// ------------------
// // SCOPE of LET & CONST is "BLOCK scoped" --> {}
// const greet = () => {
//     if (true) {
//         let x = 12;
//     }
//     console.log(x);
// };

// greet();

// ------------------ ------------------------- -----------------------------
// function sum(a, b) {
//     return a + b;
// }

// const ans = sum(10, 20);
// console.log(ans);

// // --------------- 200 lines --------------
// function sum(a, b) {
//     const result = a + b;
//     console.log(result);
// }

// ------------------ ------------------------- -----------------------------
// const sum = (a, b) => {
//     return a + b;
// };

// const ans = sum(10, 20);
// console.log(ans);

// // --------------- 200 lines --------------
// const sum = (a, b) => {
//     const result = a + b;
//     console.log(result);
// };

// ----------------------------------------------------------------------------

// const number = prompt("Please enter a number between 1 to 10") - 0;

// if (number % 2 === 0) {
//     console.log("Number is even");
// } else if (number % 3 === 0) {
//     console.log("Number is divisible by 3");
// } else {
//     console.log("1, 5, 7, 10");
// }

// switch (number) {
//     case 1: {
//         console.log("ONE");
//         break;
//     }
//     case 2: {
//         console.log("TWO");
//         break;
//     }
//     case 3: {
//         console.log("THREE");
//         break;
//     }
//     default: {
//         console.log("NOT 1,2,3");
//     }
// }

// ---------------------------------------------------------------------------

// const a = "1.1a";
// const b = "1.1b123";
// const c = "1";
// const d = "1.1";

// const na = Number(a); --> NaN
// const nb = Number(b); --> NaN
// const nc = Number(c); --> 1
// const nd = Number(d); --> 1.1

// console.log(na, nb, nc, nd);

// ---------------------------------------------------------------------------

// const a = "1.1a";
// const b = "2.1b123";
// const c = "3";
// const d = "4.1";
// const e = "324r345";

// const na = parseInt(a); // --> 1
// const nb = parseInt(b); // --> 2
// const nc = parseInt(c); // --> 3
// const nd = parseInt(d); // --> 4
// const ne = parseInt(e); // --> 324

// console.log(na, nb, nc, nd, ne);

// -----------------------------------------------------------------------------
// const a = "1.1a";
// const b = "2.1b123";
// const c = "3";
// const d = "4.1";
// const e = "324r345";

// const na = parseFloat(a); // --> 1.1
// const nb = parseFloat(b); // --> 2.1
// const nc = parseFloat(c); // --> 3
// const nd = parseFloat(d); // --> 4.1
// const ne = parseFloat(e); // --> 324

// console.log(na, nb, nc, nd, ne);

// -----------------------------------------------------------------------------

// OBJECT is a key value pair store
// keys are always strings

// const student = {
//     name: "Likhilesh",
//     city: "Delhi",
//     country: "India",
// };

// console.log(student);
// console.log(student.name);

// student.city = "Mumbai"; // CHANGE the value
// console.log(student);

// console.log(student.stack); // if a key is not present then the value is undefined

// student.stack = "MERN"; // ADDs a new key value pair

// console.log(student);
// console.log(student.stack); // MERN

// student = { city: "Kanpur" }; // RE-ASSIGNMENT OF the variable is not allowed in const
// console.log(student);

// ----------------------------------------------------------------------------------

// Loose equality check for two objects are equal will also check for their reference(address) to be equal

// const student1 = {
//     name: "Ajay",
//     city: "Delhi",
// };

// const student2 = {
//     name: "Ajay",
//     city: "Delhi",
// };

// console.log(student1);
// console.log(student2);

// if (student1 == student2) {
//     console.log("Yes both objects are same");
// } else {
//     console.log("No both objects are different");
// }

// const student3 = {
//     name: "Ajay",
//     city: "Delhi",
// };

// const student4 = student3;

// console.log(student3);
// console.log(student4);

// if (student3 == student4) {
//     console.log("Yes both objects are same");
// } else {
//     console.log("No both objects are different");
// }

// // ---------- BY DEFAULT: Copy is shallow copy in JS Non-Primitives ----------------------

// student1.name = "New Name 1";
// student3.name = "New Name 2";

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);

// ------------------------------------------------------------------------------------

// const car = {
//     engine: "V8", // property
//     model: "E6", // property
//     brand: "Audi", // property
// };

// I want to change the model from "E6" to "Square"

// I want to add a mileage:25 property

// I want to make a new car that has same specifications but has engine: 'V6'

// From the new car, I also want to remove the model property.

// -------------------------------------------------------------------------------------------

// const car1 = {
//     engine: "V8",
//     model: "E6",
//     brand: "Audi",
// };

// car1.model = "Square";
// car1.mileage = 25;

// // const car2 = car1; //  SHALLOW COPY
// const car2 = { ...car1 }; // ... --> SPREAD OPERATOR (IT IS NOT DEEP COPY)
// //                                   (We are creating a new object and putting old properties and methods in it)

// car2.engine = "V6";
// delete car2.model;

// console.log("Updated car1:", car1);
// console.log("Car2:", car2);

// ------------------------------------------------------------------

// var a = 10;

// var b = a;

// b = 11;

// console.log(a, b);

// --------------------------------------
// PRIMITIVES ARE IMMUTABLE IN JSON
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable

// let a = "hello";
// a = "hEllo";
// console.log(a);

// ---------------------------------- -------------------------------------------

// Example of SPREAD OPERATOR :: IT IS NOT DEEP COPY

// const student1 = {
//     name: "A-Rajat",
//     city: "Jaipur",
//     university: "ABCD",
//     college: "MNOP",
//     details: {
//         bloodGroup: "O+",
//         placeOfBirth: "Jaipur",
//     },
// };

// const student2 = { ...student1 };
// student2.name = "B-Rohan";
// student2.details.bloodGroup = "A+";

// console.log(student1);
// console.log(student2);

// ---------------------------------- -------------------------------------------

// const car1 = {
//     engine: "V8",
//     model: "E6",
//     brand: "Audi",
// };

// console.log(car1);

// const key = prompt("Enter Key:");
// const value = prompt("Enter Value:");

// // car1.engine = value; // using static key
// car1[key] = value; // using dynamic key

// console.log(car1);

// ------------------------------------------------------------------------------

// ARRAYS

// const arrObj = {
//     0: "Raj",
//     1: "Om",
//     2: "Shri",
// };

// console.log(arrObj);

// const arrArr = ["Raj", "Om", "Shri"];

// console.log(arrArr);

// ----------------------------------------------------------------------------

// const arr = ["Raj", "Om", "Shri"];

// arr[2] = "Hariom";

// console.log(arr);

// arr.push("Hritik");

// console.log(arr);

// ------------------
// NEVER use delete keyword in arrays (IT CREATES HOLES)

// delete arr[1];

// instead use SPLICE / POP / SHIFT

// arr.splice(1, 1);

// console.log(arr);

// ------------------
// NEVER add a value in array by index (IT CREATES HOLES)

// arr[3] = "likhilesh";
// console.log(arr);

// arr[10] = "likhilesh"; // (If index > curr/old array length, then it will create HOLES)
// console.log(arr);

// ------------------

// --------------------------------------------------------------------------------------------------------
// const arr = ["Mango", "Apple", "Papaya", "Grapes"];
// const obj = {
//     0: "Mango",
//     1: "Apple",
//     2: "Papaya",
//     3: "Grapes",
// };

// HOW DO YOU check the array length?
// const len = arr.length;
// console.log(len);

// HOW DO YOU check if the given thing is Array or object?
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// HOW to convert array to string?
// console.log(arr.toString()); // --> join by comma
// console.log(arr.join("-")); // --> join by -

// ---------------------------------------------------------------------------------------------------------

// LOOPs
const arr = ["Mango", "Apple", "Papaya", "Grapes"];
const obj = {
    calm: "Deer",
    wild: "Lion",
    fast: "Horse",
    domestic: "Dog",
};
// // GET all the keys from object --> Object.keys(objectName) --> returns array
// console.log(Object.keys(obj));

// // GET all the value from object --> Object.values(objectName) --> returns array
// console.log(Object.values(obj));

// // GET all the key-value pairs from object --> Object.entries(objectName) --> returns array of array
// console.log(Object.entries(obj));

// for (let i = 0; i < arr.length; i++) {
//     console.log("FOR LOOP on array:", arr[i]);
// }

// for (let i of arr) {
//     // only works for iterables (Array, List, ...)
//     console.log("FOR LOOP on array:", i);
// }

// for (let i in arr) {
//     console.log("FOR LOOP on array:", i);
// }

// for (let i in obj) {
//     console.log("FOR LOOP on array:", i);
// }

// " HOME WORK " --> WHILE loop and DO WHILE loop

// ---------------------------------------------------------------------------------------------------------
