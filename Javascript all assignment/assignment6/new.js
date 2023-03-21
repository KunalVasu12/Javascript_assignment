 //   Assignment=06
//       Chapter=21-25
//     String methods

//       Question=01
document.write('<h3> Chapter= 21-25 </h3>');
document.write('<h3> "Question # 01 " </h3>');

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "!");

document.write('<h3> "Question # 02 " </h3>');
var favoriteMobileModel = prompt("What is your favorite mobile phone model?");
var inputLength = favoriteMobileModel.length;
document.write(`The length of your favorite mobile phone model (${favoriteMobileModel}) is ${inputLength} characters.`);

document.write('<h3> "Question # 03 " </h3>');
var word = "Pakistani";
var index = word.indexOf("n");
document.write(`The index of the letter "n" in the word "${word}" is ${index}.`);

document.write('<h3> "Question # 04 " </h3>');
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write(`The last index of the letter "l" in the word "${word}" is ${lastIndex}.`);

document.write('<h3> "Question # 05 " </h3>');
var word = "Pakistani";
var char = word.charAt(3);
document.write(`The character at the 3rd index in the word "${word}" is "${char}".`);

document.write('<h3> "Question # 06 " </h3>');
var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write(`The new word after replacing "Hyder" with "Islam" in "${word}" is  "<br>"  "${newWord}".`);

document.write('<h3> "Question # 07 " </h3>');
var input = prompt("Enter some text:");
var upperCase = input.toUpperCase();
document.write(`The input in uppercase letters is: ${upperCase}`);

document.write('<h3> "Question # 08 " </h3>');
var num = 35.36;
var str = num.toString();
var newStr = str.replace(".", "");
document.write(`The number ${num} after removing the dot is ${newStr}`);

document.write('<h3> "Question # 09 " </h3>');
// Prompt the user for input
var username = prompt("Enter your username:");
// Define the special characters
var specialChars = ['@', '.', ',', '!'];
// Loop through the characters in the username
for (let i = 0; i < username.length; i++) {
  // Check if the character is a special character
  if (specialChars.includes(username[i])) {
    // Prompt the user to enter a valid username
    username = prompt("Please enter a valid username without any special characters (@, ., ,, !)");
    // Reset the loop to start over with the new username
    i = -1;
  }
}
document.write(`Your username is: ${username}`);

document.write('<h3> "Question # 10 " </h3>');
var userInput = prompt("Enter a string:");
var lastChar = userInput[userInput.length - 1];
document.write(`The last character of "${userInput}" is "${lastChar}".`);
