// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword); 

  var randomNumber = "0123456789";
  var upperCase = "ABCDEFGIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var randomSymbol = "~!@#$%^&*(){}[]_ -";
  var min = [8];
  var max = [128];
  confirmPasswordLength = (min || max);
  var selectedCharacter = "";
  
  function writePassword() {
    var length = passwordLength();
    if (length <= 8 || length >= 128) {
      window.alert("Your password must be between 8-128 characters. Please try again!");
      return;
    }
    confirmRandomNums();
    confirmUpperCase();
    confirmLowerCase();
    confirmSpecialCharacters();
    var newPassword = generatePassword(length);
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword; 
    selectedCharacter = "";
  }
 
  // Length of password
  var passwordLength = function() {
  var confirmPasswordLength = window.prompt("How many characters would you like your password to contain? Must contain at least 8-129 characters.");
  return confirmPasswordLength;
  }
// Include numbers
  function confirmRandomNums() {
  var randomNums = window.confirm("Would you like to add NUMBERS?"); 
  if (randomNums) {
  selectedCharacter += randomNumber
  }
}
// Include uppercase 
  function confirmUpperCase() {
    var bigLetters = window.confirm("Would you like to add UPPERCASE letters?");
    if (bigLetters) {
      selectedCharacter += upperCase
    }
  }

  // Include lowercase
  function confirmLowerCase() {
    var smallLetters = window.confirm("Would you like to include LOWERCASE letters?");
    if (smallLetters) {
      selectedCharacter += lowerCase
    }
  }

  // Include special characters
  function confirmSpecialCharacters() {
    var randomSpecials = window.confirm("Would you like to add SPECIAL CHARACTERS? (EX. ~, &, %)");
    if (randomSpecials) {
      selectedCharacter += randomSymbol
    }
  }
 

  function generatePassword(length) {
    var randomPassword = ""
  for(var i = 0; i < length; i++) {
   randomPassword = randomPassword + selectedCharacter.charAt(Math.floor(Math.random() * selectedCharacter.length));
   }
   return randomPassword;
  }