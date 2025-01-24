const arr=["One","Two", "Three", "Four", "Five"];

console.log("Displaying array elements ",arr); //One,........Five 
console.log("Element at index 0 ",arr[0]); //one
console.log("Element at index 1 ",arr[1]); //Two
console.log("Element at index 2 ",arr[2]); //Three


// Array.length
// This is use to find the length of the array

console.log(arr.length); // length is 5

// Array.push 
// This is use to add the element at the end of the array

arr.push("Six");
console.log(arr); // one,.......six

// Array.pop
// this is use to remove the element at the end of the array

arr.pop();
console.log(arr); // one,.......five

// Array.shift
// this is use to remove the element at the beginning of the array

console.log(arr.shift()); // one

// Array.unshift
// this is use to add the element at the beginning of the array


console.log(arr.unshift("One")); // 5


// Array.slice
// this is use to get the part of the array
console.log(arr.slice(1,3)); // two, three

// Array.splice
// this is use to add or remove the element from the array
console.log(arr.splice(1,2,"Seven","Eight")); // two, three
