// function sayHello(){
//     let you = prompt("What is your name");
//     console.log("Hello"+you+ "!");
//     }
// sayHello();

// let varContainingFunction = function(){
//     let varInFunction="I'm in a function";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();
// function tester(para1,para2){
//     return para1+""+para2;

// }
// const agr1 = "argument 1";
// const agr2 = "argument 2";
//  console.log (tester(agr1,agr2));

// let x1=parseInt(prompt("enter the first number"));
// let x2 = parseInt(prompt("enter the ssecond number"));
// addTwoNumbers(x1,x2);
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers(4,5);//arrow function are great for sending function around parameters using shorter notation

// represented by =>
// let doingArrowStuff=  x => console.log(x);
// doingArrowStuff("great!");

// let addTwoNumbers = (x,y)=> console.log(x+y);
// addTwoNumbers(2,4);

// const arr=["squirrel","alpac","buddy"];
// arr.forEach(e => console.log(e));
  
// SPREAD OPERATOR

// let spread = ["so","much","fun"];
// let message =["javascript","is",...spread,"and","very","powerful"
// ];
// console.log(message);

// function addTwoNumbers(x,y){
//        console.log(x+y);

// }
// let arr =[5,9];
// addTwoNumbers(...arr);
// function addTwoNumbers(x,y,z,a){
//     console.log(x+y+z+a);

// }
// let arr =[5,9];
// let arr2 = [6,7];
// addTwoNumbers(...arr ,...arr2);


// REST PARAMETER 

// function someFunction(p1,...p2){
//     console.log(p1,p2);
// }
// someFunction("hi","there!","how are you");

// RETURNING FUNCTION VALUES

// let result =addTwoNumbers(4,5);
// console.log(result);

// let addTwoNumbers=(x,y) => x+y;

// let resultarr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i);
//     resultarr.push(result);
// }
// console.log(resultarr);


// RETURNING WITH ARROW FUNCTION

// VARIABLE SCOPE IN FUNCTION

// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("Hi!");
// console.log("Not Available here:",x);

// function testAvailability(y){
//     let y="Local Variable";
//     console.log("Available here:",y);
// }
// testAvailability("Hi!");
// console.log("Not Available here:",y);

// function testAvailability(y){
//          let y="I'll return";
//          console.log("Available here:",y);
//          return y;
//      }
// let z=testAvailability();
// console.log("Outside the function:",z);
// console.log("Not available here:",y);

// function doingStuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         const x="local";
//     }
// }
// doingStuff();

// GLOBAL VARIABLE
// let globalVar ="Accessible everywhere!";
// console.log("Outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global variable inside function:",globalVar);
// }
// creaingNewScope("Local variable"); 
//  console.log("Access to global vars outside function",globalVar);

// let x="global";
// function doingStuff(){
//         let x="local";
//         console.log(x);
//     }
// doingStuff();

// let x="global";
// function doingStuff(){
//          x="local";
//         console.log(x);
//     }
// doingStuff();

// let x="global";
// function doingStuff(){
//         console.log(x);
//     }
// doingStuff("param");

// function confuseReader(){
//     x="Guess my scope...";
//     console.log("Inside the function:",x)
// }
// confuseReader();
// console.log("Outside the function:",x);

// IMMEDIATELY INVOKED FUNCTION EXPRESSION
// (function(){
//     console.log("IIFE!");
// })();

// (()=>{
//     console.log("run right away");
// })();

// RECURSIVE FUNCTION

// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);
// }}
// getRecursive(3);

// function getRecursive(nr){
//     if(nr>0){
//     getRecursive(--nr);
// } console.log(nr);
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function :",nr);
//     if(nr>0){
//     logRecursive(nr-1);
// }
// else{
//     console.log("Done with recursion: ");
// }
// console.log("Ended function :",nr);}
// logRecursive(3);

// NESTED FUNCTION

// function doOuterFunctionStuff(nr){
//     console.log("Outer Function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variables:",nr);
//     }
// }
// doOuterFunctionStuff(2);

// FUNCTION CALLBACKS

// let functionVariable = function(){
//     console.log("Not so secret though.");
// };
// functionVariable();
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doingFlexibleStuffFunction.");
// }
// doFlexibleStuff(functionVariable);

// let youGotThis =function(){
//     console.log("You're doing really well,keep going!");
// };
// setTimeout(youGotThis,1000);

// let youGotThis =function(){
//     console.log("You're doing really well,keep going!");
// };
// setInterval(youGotThis,1000);

// (function(){
//     console.log("Welcome");
// })();
// (function(){
//     let firstname="Laurence";
// })();
// let result =(function(){
//     let firstname="Laurence";
//     return firstname;
// })();
// console.log(result);
// (function(firstname){
//     console.log("My name is " + firstname)
// })("Laurence");




