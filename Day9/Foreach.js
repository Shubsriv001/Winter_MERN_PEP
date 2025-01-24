// It can not create new array

const arr1=[1,2,3,4,5,6,7];
arr1.forEach((val)=>{
    console.log(val**2);
})


//Map  --it can create new array

const arr2=[1,2,3,4,5,6,7,8,9,10];

let new_arr=arr2.map((val)=>{
    return val;
});

console.log(new_arr);



// Destructuring

const arr3 = ["Shubhanshu", "kumar", "Srivastava"];
const [first, second, third] = arr3;

console.log(first); // Output: Shubhanshu
console.log(second); // Output: kumar
console.log(third);  // Output: Srivastava


const obj= {
name:"Shubhanshu",
city: "Delhi",
country: "India" ,
phone: "123ø989234",
bloodGroup: "04"
};

const { firstElement } = obj;
console. log(firstElement[0]) ;