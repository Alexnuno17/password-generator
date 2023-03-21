// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Variables
var pLength = "";
var UpperCasePrompt = "";
var UpperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCasePrompt = "";
var LowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
var numbersPrompt = "";
var NumbersSet = "0123456789";
var specialPrompt = "";
var SpecialSet = "\\!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Write password input conditions and requirements
function generatePassword() {
  console.log("this is the generate Password function");
  passwordLength ();
}
// Write function to store password length variable
function passwordLength () {  
  var minLength = 8;
  var maxLength = 128;
  pLength = window.prompt("\nPlease select a password length. \nIt should be between 8 and 128 characters");
  // Reload page if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!pLength) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } else if (pLength >= minLength && pLength <= maxLength) {
    window.alert("\nYou selected " + pLength + " characters");
    console.log("The number of selected characters was " + pLength);
    upperCasechars();
  } else {
    window.alert("\n⚠️ Invalid number of characters ⚠️ \n\nPlease select a password length between 8 and 128 characters");
    passwordLength();
  }
}
// Write function to store UpperCase characters variable
function upperCasechars(){
  UpperCasePrompt = window.prompt("\nWould you like to include upper case characters in your password? \n\nYes / No");  
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!UpperCasePrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  }
  // Change Answer to lowercase characters to avoid errors in logic
  UpperCasePrompt = UpperCasePrompt.toLowerCase();
  if (UpperCasePrompt === "yes") {  
    window.alert("\nYou selected " + UpperCasePrompt + " to include upper case characters.");
    console.log("The user said " + UpperCasePrompt + " to the inclusion of upper case characters.");
    lowerCasechars();
  } else if (UpperCasePrompt === "no") {
    window.alert("\nYou selected " + UpperCasePrompt + " to the inclusion of upper case characters.");
    console.log("The user said " + UpperCasePrompt + " to the inclusion of upper case characters.");
    lowerCasechars();
  } else if (UpperCasePrompt !== "") { 
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include upper caase characters in the password.");
    upperCasechars();
  }
}
// Write function to store LowerCase characters variable
function lowerCasechars(){ 
  LowerCasePrompt = window.prompt("\nWould you like to include lower case characters in your password? \n\nYes / No");
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!LowerCasePrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } 
  // Change Answer to lowercase characters to avoid errors in logic
  LowerCasePrompt = LowerCasePrompt.toLowerCase();
  if (LowerCasePrompt === "yes") {  
    window.alert("\nYou selected " + LowerCasePrompt + " to include lower case characters.");
    console.log("The user said " + LowerCasePrompt + " to the inclusion of lower case characters.");
    numberchars();
  } else if (LowerCasePrompt === "no") {
    window.alert("\nYou selected " + LowerCasePrompt + " to the inclusion of lower case characters.");
    console.log("The user said " + LowerCasePrompt + " to the inclusion of lower case characters.");
    numberchars();
  } else if (LowerCasePrompt !== "") {
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include lower caase characters in the password.");
    lowerCasechars();
  }
}
// Write function to store numbers variable
function numberchars(){ 
  numbersPrompt = window.prompt("\nWould you like to include numbers in your password? \n\nYes / No");
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!numbersPrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } 
  // Change Answer to lowercase characters to avoid errors in logic
  numbersPrompt = numbersPrompt.toLowerCase();
  if (numbersPrompt === "yes") {  
    window.alert("\nYou selected " + numbersPrompt + " to include numbers.");
    console.log("The user said " + numbersPrompt + " to the inclusion of numbers.");
    specialchars();
  } else if (numbersPrompt === "no") {
    window.alert("\nYou selected " + numbersPrompt + " to the inclusion of numbers.");
    console.log("The user said " + numbersPrompt + " to the inclusion of numbers.");
    specialchars();
  } else if (numbersPrompt !== ""){
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include numbers in the password.");
    numberchars();
  }
}
// Write function to store special characters variable
function specialchars(){ 
  specialPrompt = window.prompt("\nWould you like to include special characters in your password? \n\nYes / No");
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!specialPrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } 
  // Change Answer to lowercase characters to avoid errors in logic
  specialPrompt = specialPrompt.toLowerCase();
  if (specialPrompt === "yes") {  
    window.alert("\nYou selected " + specialPrompt + " to include special characters.");
    console.log("The user said " + specialPrompt + " to the inclusion of special characters.");
    inputValidation();
  } else if (specialPrompt === "no") {
    window.alert("\nYou selected " + specialPrompt + " to the inclusion of special characters.");
    console.log("The user said " + specialPrompt + " to the inclusion of special characters.");
    inputValidation();
  } else if (specialPrompt !== "") {
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include special characters in the password.");
    numberchars();
  }
}
// Write function to validate at least one character type was selected
function inputValidation () {
  if (UpperCasePrompt === "no" && LowerCasePrompt === "no" && numbersPrompt === "no" && specialPrompt === "no"){
    window.alert("\n⚠️ WARNING ⚠️  \n\nAt least one character type must be selected.\n The page will be reloaded");
    window.location.reload();
  } else {
    var dataInput = document.querySelector("#log");
    dataInput.value = "Here is the data that you have input to be considered for your password: \n\nPassword Length: " + pLength + "\nUpperCase characters selected: " + UpperCasePrompt + "\nLowerCase characters selected: " + LowerCasePrompt + "\nNumbers selected: " + numbersPrompt + "\nSpecial characters selected: " + specialPrompt;
    return;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);