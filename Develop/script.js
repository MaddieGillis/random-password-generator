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
  var password = generatePassword();  //comment out while testing functions
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //if (confirm("Is this working?")) {

  /*console.log("It worked!");
  } else {
    console.log("Try again");
  } */ //Test code


  //window prompts to confirm user's requirements

  function generatePassword () {
  var passwordLength = prompt("How many characters do you need?");

 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8-128.")
  } else if  (passwordLength >= 8 && passwordLength <= 128) {
    var checkUpper = confirm("Do you require uppercase?");
    var checkLower = confirm("Do you requrie lowercase?");
    var checkNumbers = confirm("Do you require numbers?");
    var checkSpecial = confirm("Do you require special characters?");
  }
 
  
  //Possible combonations of password requirements
  if (checkUpper !== true && checkLower !== true && checkNumbers !== true && checkSpecial !== true) {
    alert("Please click ok to at least one requirment.");
  } else if (checkUpper && checkLower && checkNumbers && checkSpecial) {
   var userRequirements = upperCase.concat(lowerCase, numCase, specialCase);
    console.log("upper, lower, num, special"); //console logs are confirming each chosen case

  } else if (checkUpper && checkLower && checkNumbers && checkSpecial !== true){
   var userRequirements = upperCase.concat(lowerCase, numCase);
   console.log("Upper, lower, num");

  } else if (checkUpper && checkLower && checkNumbers !== true && checkSpecial) {
    var userRequirements = upperCase.concat(lowerCase, specialCase);
    console.log("upper, lower, special");

  } else if (checkUpper && checkLower !== true && checkNumbers && checkSpecial) {
    var userRequirements = upperCase.concat(numCase, specialCase);
    console.log("upper, num, special");

  } else if (checkUpper !== true && checkLower && checkNumbers && checkSpecial) {
    var userRequirements = lowerCase.concat(numCase, specialCase);
    console.log("lower, num, special");

  } else if (checkUpper && checkLower && checkNumbers !== true && checkSpecial !== true) {
    var userRequirements = upperCase.concat(lowerCase);
    console.log("upper, lower");

  } else if (checkUpper && checkLower !== true && checkNumbers && checkSpecial !== true) {
    var userRequirements = upperCase.concat(numCase);
    console.log("upper, num");

  } else if (checkUpper && checkLower !== true && checkNumbers === false && checkSpecial) {
    var userRequirements = upperCase.concat(specialCase);
    console.log("upper, special");
    
  } else if (checkUpper !== true && checkLower && checkNumbers && checkSpecial !== true) {
    var userRequirements = lowerCase.concat(numCase);
    console.log("lower, num");

  } else if (checkUpper !== true && checkLower && checkNumbers !== true && checkSpecial) {
    var userRequirements = lowerCase.concat(specialCase);
    console.log("lower, special");

  } else if (checkUpper !== true && checkLower !== true && checkNumbers && checkSpecial) {
    var userRequirements = numCase.concat(specialCase);
    console.log("num, special");

  } else if (checkUpper && checkLower !== true && checkNumbers !== true && checkSpecial !== true) {
    var userRequirements = upperCase;
    console.log("upper only");
  
  } else if (checkUpper !== true && checkLower && checkNumbers !== true && checkSpecial !== true) {
    var userRequirements = lowerCase;
    console.log("lower only");

  } else if (checkUpper !== true && checkLower !== true && checkNumbers && checkSpecial !== true) {
    var userRequirements = numCase;
    console.log("num only");

  } else if (checkUpper !== true && checkLower !== true && checkNumbers !== true && checkSpecial) {
    var userRequirements = specialCase;
    console.log("special only");

  }

  // write randomize function

  for (i=0; i < passwordLength; i++) {
    var finalRequirements = userRequirements[Math.floor(Math.random() * userRequirements.length)];
    var emptyPassword = [];
    var finalPassword = emptyPassword.push(finalRequirements);
    console.log(finalPassword);
  }

  var password = emptyPassword.join("");
  console.log(password);
  return password;
  }  
}

// Add event listener to generate button
document.addEventListener("click", writePassword); //tells button to run writePassword function, eventlistner allows for multiple uses for the same button

