  
    //   Assignment=04
    //   Chapter=9-10
    // USER INPUT & CONDITIONAL STATEMENT

//       Question=01
// document.write('<h2> Chapter=9-10 </h2>');
// document.write('<h3> "Question # 01" </h3>');
// var city = prompt("Enter the name of your city: ");

// if (city === "Karachi") {
//   document.write("Welcome to the city of lights");
//  } 

//  //       Question=02
//  document.write('<h2> "Question # 02" </h2>');
//  var Gender = prompt("ENter YOUR Gender");
//  if(Gender === "male"){
//   document.write('<h3>"Good Morning Sir...❤️"</h3>');
//  }if(Gender === "female"){
//   document.write("Good Morning Ma'am...❤️");
//  }
  
//  //       Question=03
// document.write('<h2> "Question # 03" </h2>');
// var traffic_signal = prompt("ENter the traffic Signal");
//  if(traffic_signal === "red"){
//   document.write('<h4>Must Stop</h4>');
//  }if(traffic_signal === "yellow"){
//   document.write('<h4>Ready to Move</h4>');
//  }if(traffic_signal === "green"){
//   document.write('<h4>Move now</h4>');
//  }


 
// //       Question=04
// document.write('<h2> "Question # 04" </h2>');
// var car_fuel = prompt("fuel in car");
// var fuel= "car";
// if (car_fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
//   } 

//   //      Question=05
//   document.write('<h2> "Question # 05" </h2>');
//   document.write("<h2>(A)</h2>")
//   var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// document.write("Alert message would be displayed");

// document.write("<h2>(B)</h2>");
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// document.write("Alert message would be not displayed");

// document.write("<h2>(C)</h2>");
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// document.write("Condition 2 and 4 is true"+ "<br>"+"Alert message would be displayed");

// document.write("<h2>(D)</h2>");
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// document.write("Alert message would be displayed");

// document.write("<h2>(E)</h2>");
// if (true){
//   alert("True");
//   }
//   if (false){
//   alert("False");
//   }
//   document.write("Alert message would be True displayed");

//   document.write("<h2>(F)</h2>");
//   if("car" < "cat"){
//     alert("car is smaller than cat");
//     } 
//     document.write("Alert message would be displayed");

   
// //      Question=07
// document.write('<h2> "Question # 07" </h2>');

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guessedNumber = prompt("Guess the secret number (ranging from 1 to 10):");

// if (guessedNumber === secretNumber) {
//   document.write("Bingo! Correct answer");
// }
// else if (Math.abs(guessedNumber - secretNumber) === 1) {
//   document.write("Close enough to the correct answer");
// } else {
//   document.write("Wrong answer. The secret number was", secretNumber);
// }

// //      Question=08
// document.write('<h2> "Question # 08" </h2>');

// var number = prompt("Enter a number:");
// if (number % 3 === 0) {
//   document.write(number, "is divisible by 3");
// } else {
//   document.write(number, "is not divisible by 3");
// }

// //      Question=09
// document.write('<h2> "Question # 09" </h2>');
// var number = prompt("Enter a number:");
// if (number % 2 === 0) {
//   document.write(number, "is an even number");
// } else {
//   document.write(number, "is an odd number");
// }

// //      Question=10
// document.write('<h2> "Question # 10" </h2>');
// var temperature = prompt("Enter the temperature: ");

// if (temperature > 40) {
//   document.write("It is too hot outside.");
// } else if (temperature > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//   document.write("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   document.write("OMG! Today’s weather is so Cool.");
// } else {
//   document.write("The temperature is below 10°C, it's quite cold.");
// }

// //      Question=11
// document.write('<h2> "Question # 11" </h2>');
// var firstNumber = prompt("Enter the first number: ");
// var secondNumber = prompt("Enter the second number: ");
// var operation = prompt("Enter the operation (+, -, *, /, %): ");

// if (operation === "+") {
//   document.write(firstNumber + secondNumber);
// } else if (operation === "-") {
//   document.write(firstNumber - secondNumber);
// } else if (operation === "*") {
//   document.write(firstNumber * secondNumber);
// } else if (operation === "/") {
//   document.write(firstNumber / secondNumber);
// } else if (operation === "%") {
//   document.write(firstNumber % secondNumber);
// } else {
//   document.write("Invalid operation");
// }

//       Question=01
document.write('<h2> Chapter=12-13 </h2>');
document.write('<h3> "Question # 01" </h3>');
var input = prompt("Enter a character: ");

if (input >= '0' && input <= '9') {
  document.write("The input is a number.");
} else if (input >= 'A' && input <= 'Z') {
  document.write("The input is an uppercase letter.");
} else if (input >= 'a' && input <= 'z') {
  document.write("The input is a lowercase letter.");
} else {
  document.write("The input is not a number or a letter.");
}


//       Question=02
document.write('<h2> "Question # 02" </h2>');
var num1 = prompt("Enter the first integer: ");
var num2 = prompt("Enter the second integer: ");

if (num1 > num2) {
  document.write("The larger number is num1 :" + num1);
} else if (num2 > num1) {
  document.write("The larger number is num2 :" + num2);
} else {
  document.write("The two numbers are equal.");
}

//       Question=03
document.write('<h2> "Question # 03" </h2>');
var num = prompt("Enter a number: ");
if (num > 0) {
  document.write("The number is positive.");
} else if (num < 0) {
  document.write("The number is negative.");
} else {
  document.write("The number is zero.");
}

//       Question=04
document.write('<h2> "Question # 04" </h2>');
var char = prompt("Enter a character: ");
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
document.write(true);
} else {
  document.write(false);
}
//       Question=05

//       Question=06
document.write('<h2> "Question # 06" </h2>');
var greeting;
var hour = 13;
if (hour < 18) {
  document.write("Good day");
} else {
  document.write("Good evening");
}
//       Question=07
document.write('<h2> "Question # 07" </h2>');
var time = parseInt(prompt("Enter time in 24 hours clock format (e.g. 1900 for 7pm): "));

if (time >= 0000 && time < 1200) {
  document.write("Good morning");
} else if (time >= 1200 && time < 1700) {
  document.write("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  document.write("Good evening");
} else if (time >= 2100 && time <= 2359) {
  document.write("Good night");
} else {
  document.write("Invalid input");
}

