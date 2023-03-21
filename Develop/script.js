var generateBtn = document.querySelector("#generate");

const characters = [
  ["LOWERCASE", "abcdefghijklmnopqrstuvwxyz"],
  ["UPPERCASE", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  ["NUMERIC", "0123456789"],
  ["SPECIAL", "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"]
];

function generatePassword() {
  let password = '';
  // Prompt for password length
  try {
    do {
      var passwordLength = askLength();
    } while (passwordLength === undefined);
  } catch (err) {
    alert(err);
    return;
  }
  // Prompt for password character types
  try {
    var finalCharSelected = [];
    for (let i = 0; i < characters.length; i++) {
      do {
        var isCharAvailable = askPreference(characters[i][0]);
      } while (isCharAvailable === undefined);
      if (isCharAvailable) {
        finalCharSelected.push(characters[i])
      }
    }
    if (finalCharSelected == false) throw 'No character types selected.  Passwords must use at least one character type.';
  } catch (err) {
    alert(err);
    return;
  }
  let charToDisplay = [];
  finalCharSelected.forEach(element => { charToDisplay.push(` ${element[0]}`) });
  alert(`*Final Selections*\nNumber of characters: ${passwordLength}\nCharacter types:${charToDisplay}`);
  // Generate Password
  for (let i = 0; i < passwordLength; i++) {
    let charType = Math.floor(Math.random() * finalCharSelected.length);
    let characterNumber = Math.floor(Math.random() * (`${finalCharSelected[charType][1]}`).length);
    let randomcharacter = (`${finalCharSelected[charType][1]}`).charAt(characterNumber);
    password = password.concat(randomcharacter);
  }
  return password;
}
// Ask for length of password
function askLength() {
  let response = prompt(`How many characters will the password be?\nChoose a value between 8 and 128:`);
  if (response === null) {
    throw "Password generation cancelled.";
  }
  if (isNaN(response)) {
    alert('That is not a number.  Please try again.')
  }
  else if (!(Number.isInteger(parseFloat(response)))) {
    alert('That is not a whole number. Please try again.')
  }
  else if (!(response >= 8 && response <= 128)) {
    alert('That number is outside the bounds.  Please try again.')
  }
  else {
    return response;
  }
}
// Asks if a certain character type should be considered and adds it to the available characters
function askPreference(charactertype) {
  let response = prompt(`Do you want ${charactertype} characters? (Y/N):`);
  if (response === null) {
    throw "Password generation cancelled.";
  }
  response = response.toLowerCase();
  if (response !== 'y' && response !== 'n' && response !== 'yes' && response !== 'no') {
    alert('That is an invalid answer. Please try again.')
  }
  else {
    if (response === 'y' || response === 'yes') {
      return true;
    } else {
      return false;
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === undefined) {
    return;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);