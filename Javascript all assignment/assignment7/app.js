//   Assignment=07
//       Chapter=26-30
//     Math Methode

//       Question=01
document.write('<h3> Chapter= 26-30 </h3>');
document.write('<h3> "Question # 01 " </h3>');

var num = prompt("Please enter a positive integer:");

var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
document.write("<p>The number you entered is: " + num + "</p>");
document.write("<p>The round value of the number is: " + roundNum + "</p>");
document.write("<p>The floor value of the number is: " + floorNum + "</p>");
document.write("<p>The ceil value of the number is: " + ceilNum + "</p>");

//       Question=2
document.write('<h3> "Question # 02 " </h3>');
var num = prompt("Enter a number:");
num = parseFloat(num);
var absVal = Math.abs(num);
document.write("The absolute value of " + num + " is " + absVal);

//       Question=3
document.write('<h3> "Question # 03 " </h3>');
var diceValue = Math.floor(Math.random() * 6) + 1;
var result = "You rolled a " + diceValue + "!";
document.write(result);

//       Question=4
document.write('<h3> "Question # 04 " </h3>');
var tossValue = Math.floor(Math.random() * 2);
var coin = tossValue === 0 ? "heads" : "tails";
var result = "The coin landed on " + coin + "!";
document.write(result);

//       Question=5
document.write('<h3> "Question # 05 " </h3>');
var randomNumber = Math.floor(Math.random() * 100) + 1;
var result = "Your random number is: " + randomNumber;
document.write(result);

//       Question=6
document.write('<h3> "Question # 06 " </h3>');
var weightInput = prompt("Please enter your weight (in kg or kg abbreviation):");
var weightInKgs = parseFloat(weightInput.replace(/[^\d.]/g, ""));
var result = "Your weight is: " + weightInKgs + " kg";
document.write(result);
