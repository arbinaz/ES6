function varTest(){
    var x=1;
    if(true){
        var x=2;
        console.log(x);
    }
    console.log(x);
}
varTest()

function es6Test(){
    var x=1;
    if(true){
        var x=2;
        console.log(x);
    }
    console.log(x);
}
es6Test()

// Functions
function add(a,b){
    return a + b;
}
add(3,4)

// Function Expression
var add1=function(a,b){
    return a + b;
}
add1(3,4);

// ES6 Arrow Function
const add2=(a,b)=>{
    return a + b;
}

// One Statement
const add3=(a,b)=>a+b;
const mul=(a,b) => a*b;
var res=mul(5,5)
console.log(res);

// Default Parameter Values
function demo(x, y, z){
    if(y===undefined){
        y=0;
    }else if(z===undefined){
        z=0;
    }
    return x + y + z;
}
var res1=demo(10,20);
console.log(res1)

const demo1=(a,b=10,c=20) =>{
    return a + b + c;
}
const res2=demo1(10);
console.log(res2);

// String Concatination
var Name=' Taj';
var greeting='Happy Birthday';
var message= greeting +  Name + ' Have a great year ahead'
console.log(message);

// Template Literals
const mes=`${greeting} ${Name} Have a great year ahead`
console.log(mes);

// Arrays

const arr=[3,7,9,11]
const arr1=[];
for(let i=0;i<=arr.length-1;i++){
    arr1.push(arr[i]*2)
}
console.log(arr1);

// Array Helper Method
// map, find, filter, forEach and reduce

// const test=arr.map(function(e){
//     console.log(e);
// })
const test=arr.map((item)=>{
    return item*2;
})
console.log(arr);
console.log(test);