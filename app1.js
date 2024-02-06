console.log("Hi it's Tanuj!");



let color = "Green";

if(color == "Red"){
    console.log(`Stop!`);
}else if(color == "Yellow"){
    console.log(`Slow Down!`);
}else if(color == "Green"){
    console.log(`Go!`)
}

// Popcorn prices
let size = "XL";

if(size === "XL"){
    console.log(`Price is 250rs`);
}else if(size === "L"){
    console.log(`Price is 200rs`);
}else if(size === "M"){
    console.log(`Price is 100rs`);
}else if(size === "S"){
    console.log(`Price is 50rs`);
}else{
    console.log(`Enter the correct size!`);
}


let userName = "tanuj";
if((userName[0] === 'a') && (userName.length >3)){
    console.log(`Good String`);
} else{
    console.log(`Not a good string`);
}
console.log(userName[(userName.length)/2]);
console.log(5/2);

let Color = "Yellow";

// Practice Questions
switch(Color){
    case "Red" :
        console.log("Stop!");
        break;
    case "Yellow" :
        console.log("Slow down!");
        break;
    case "Green" :
        console.log("Go!");
        break;
    default :
    console.log("Traffic light is broken");
}

// Practice Questions

let day = "Sunday";

switch(day){
    case "Monday" :
        console.log("Day-1");
        break;
    case "Tuesday" :
        console.log("Day-2");
        break;
    case "Wednesday" :
        console.log("Day-3");
        break;
    case "Thursday" :
        console.log("Day-4");
        break;
    case "Friday" :
        console.log("Day-5");
        break;
    case "Saturday" :
        console.log("Day-6");
        break;
    case "Sunday" :
        console.log("Day-7");
        break;
    default :
        console.log("Enter correct day !");
        break;
}

// alerts and prompts in JS
alert("this is an Alert!");


// To display error
console.error("This is an error!");

// To display warnings
console.warn("This is a warning Message!");


// prompt in JavaScript
// prompt("Enter your name:");

// We can save the prompt data inside a variable
// let promptName = prompt("Enter your name");
// console.log(promptName);

// // practice Questions
// let firstName = prompt("Enter First name:");
// let middleName = prompt("Enter middle name:");
// let lastName = prompt("Enter Last name:");

// console.log(firstName + middleName + lastName);

// JS Assignment Questions

// Question 1 solution
let num = 355;

if(num % 10 === 0){
    console.log("Good");
} else{
    console.log("Bad");
}

// Question 2 solution
// let uName = prompt("Enter your Name:");
// let uAge = prompt("Enter your Age:");
// let msg = `${uName} your age is ${uAge} years`;
// alert(msg);
// alert(` ${uName} is ${uAge} years old`);

// Question 3 solution
let month = 1;
 
switch(month){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid input!");
        break;
}

// Question 4 solution
let str = "Apples";

if(str[0] === ('A' || 'a') && (str.length > 5) ){
    console.log("golden string");
} else{
    console.log("Not a golden string");
}

// Question 5 solution
let a = 100;
let b = 20;
let c = 10;

if(a > b && a > c){
        console.log("A is greatest");
} else if(b > a && b > c){
    console.log("B is greatest");
} else{
    console.log("C is greatest");
}

// Question 6 solution
let no1 = 12345;
let no2 = 5;

if(no1 % 10 == no2 % 10){
    console.log("Both the numbers have same last digit which is", no1 % 10 );
} else{
    console.log("Both numbers do not have same last digit");
}