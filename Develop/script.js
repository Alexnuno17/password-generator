var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("myBtn").addEventListener("click", displaydate);

// added stuff underneath
function generatePassword() {
  var uppercase = prompt("Enter the number of uppercase characters you want. (0 - 2)", "2");
  var specialchars = prompt("Enter the number of Special Characters you want. (0 - 2)", "2");
  var nums = prompt("Enter how many digits you want. (0 - 2)", "2");
  var pastleg = prompt("How long do you want your password to be? (8 - 128)", "12");
  

  if((/\D/.test(uppercase)) || (/\D/.test(nums)) || (/\D/.test(specialchars)) || (/\D/.test(pastleg))) {
    return("Please enter numbers only.");
    
  } else {
      if((pastleg >= 8 && pastleg <= 128) && (specialchars <= 2) && (nums <= 2) && (uppercase <= 2)) {
       
        // subtract special and upper from password length and numbers 
        var ltrs = (pastleg.value - (specialchars.value + nums.value + uppercase.value));
        return(ltrs);
        // generate random letters  
        const letters = "abcdefghijklmnopqrstuvwxyz"

        // generate uppercase randoms 
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        // generate specialchars
        const specials = "!@#$%^&*"

        const numbs = "1234567890" // generating numbers 

        // randomize them together 
      } else {
          return("Please enter correct length");
      }
  }
}
