// Assignment code here

// All possible characters allowed in password seperated by user choice
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCase = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`" ]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();  //comment out while testing functions
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //if (confirm("Is this working?")) {

  /*console.log("It worked!");
  } else {
    console.log("Try again");
  } */ //Test code

  var passwordLength = prompt("How many characters do you need?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8-128.")
  } else if  (passwordLength >= 8 && passwordLength <= 128) {
    var checkUpper = confirm("Do you require uppercase?");
    var checkLower = confirm("Do you requrie lowercase?");
    var checkNumbers = confirm("Do you require numbers?");
    var checkSpecial = confirm("Do you require special characters?");
  }
  
  if (checkUpper !== true && checkLower !== true && checkNumbers !== true && checkSpecial !== true) {
    alert("Please click ok to at least one requirment.");
  }

  
}

// Add event listener to generate button
document.addEventListener("click", writePassword); //tells button to run writePassword function, eventlistner allows for multiple uses for the same button

