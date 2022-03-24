// Assignment Code

// arrays to store all possible characters 
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
var password = [];

var generateBtn = document.querySelector("#generate"); //selects generate class in html to generate button

// defining generate password function  
function generatePassword() {
  console.log("button clicked"); // confirming button works 
  var selectedChar = [];
  var result = [];

  var passwordLength = parseInt(prompt("How long do you want your password to be?")) //asks for length of password and makes sure its an integer

  if (isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) { //checks if its not a number, less than 8 characters, or more than 128 characters 
    window.alert("Password must be between 8 and 128 characters.")
    return("Please try again by clicking the generate password button.");
  }
  if (passwordLength > 8 || passwordLength < 128) { // if all length requirements are met, runs the window.confirms and stores their value in the var

    var addUpperLetters = window.confirm("Include uppercase letters?");
    var addLowerLetters = window.confirm("Include lowercase letters?");
    var addNumbers = window.confirm("Include numbers?");
    var addSpecialChar = window.confirm("Include special characters?");
  }

// if statements to concatenate arrays including character sets the user selected
  if (addUpperLetters) {
    selectedChar = selectedChar.concat(upperLetters);
  }

  if (addLowerLetters) {
    selectedChar = selectedChar.concat(lowerLetters);
  }

  if (addNumbers) {
    selectedChar = selectedChar.concat(numbers);
  }

  if (addSpecialChar) {
    selectedChar = selectedChar.concat(specialChar);
  }

  console.log(selectedChar); //confirming the array is concatenating correctly before going into for loop

  for (i = 0; i < selectedChar.length; i++) {
    if (selectedChar) {
      password += selectedChar; // password has all options the user requested
    }
  }
  
  for (var i = 0; i < passwordLength; i++) { // randomizes result for the generated password
    result += password.charAt(Math.floor(Math.random() *
      password.length));
  }

  return result; // outputs randomized password 
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
