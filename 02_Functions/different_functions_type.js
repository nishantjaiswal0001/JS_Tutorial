let hello=function print(){
    console.log("Hello")
}
// print()
hello()

function printargument(s){
    console.log(s)
}

let myname=printwhateverpassed=(s)=>{
    return s
}

(function(){
    console.log("hiek")
})();

(function(a,b){
    console.log(a+b)
})(3,6);

let facto=f=(n)=>{
     let ans=n;
     for(i=n-1;i>0;i--){
        ans*=i;
     }
     return ans;
}

f=(n)=>(n-1)

// setTimeout(function(){
//     console.log("Hi how are you")
// },3000)

// Callback function

function greet(name){
    console.log("Good morning!", name)
}

function callhim(name){
    console.log("Hey!",name, "come here")
}

function dosomething(work,name){
    work(name)
}

dosomething(greet,"Nishant")
dosomething(callhim,"vishal")

// Function Returning Function
function outer(){
    return function inner(){
        console.log("Returned function");
    }
}

outer()();

// Method Function (inside object)
let user = {
    name: "Nishant",
    sayHi(){
        console.log("Hi", this.name);
    }
}

user.sayHi();

// Constructor Function
function Person(name){
    this.name = name;
}

let p1 = new Person("Abhinash");
console.log(p1.name);

// Async Function, async makes a function always return a Promise
async function fetchData(){
    return "Data received";
}

fetchData().then(console.log);

// Async Arrow Function
const fetchData2 = async () => "Async Arrow";
fetchData2().then(console.log);







printargument("Nishant")
console.log(printwhateverpassed("Nishant"))
console.log(myname(6))
console.log(myname("Nisha"))
console.log(f(5))