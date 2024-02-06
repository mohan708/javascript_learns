// Primitive

// 7 types : String ,Number, Boolean ,Null, Undefined, Symbol, BigInt

const id =Symbol("123");
console.log(typeof id); //symbol

//Reference(Non primitive)

// Array,Object,function

//JavaScript is a dynamically typed language, meaning that variable types are determined at runtime rather than being explicitly declared in the code.

//Array
const heroes= ["a", "b", "c"];
let myObj={
    name:"mohan"
}

const myfunction= function(){
    console.log("hello world");
}

console.log(typeof myfunction)//function
console.log(typeof heroes)//object