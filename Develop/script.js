// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charList = [];
  
  var capLet = window.confirm("Include capital letters?"); //ADD CAPITALS TO ARRAY IF TRUE
  if(capLet) {
    charList.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }

  var lowLet = window.confirm("Include lower case letters?"); //add lower case to array if true
  if(lowLet) {
    charList.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  
  var numbers = window.confirm("Include numbers?");
  if(numbers) {
    charList.push("1","2","3","4","5","6","7","8","9","0");
  }

  var symbols = window.confirm("Include special characters?")
  if(symbols) {
    charList.push("!","@","#","$","%","^","&","*","(",")","[","]","{","}",";","'",",",".","/","<",">","?");
  }

  var length = window.prompt("Length of password?");

  console.log(charList);

  var newPass = [];

  if(length == 0 || length == instanceof String) {
    passwordText.value = "Invalid length or please select a character length of at least 1";
  } else if (charList.length < 2) {
    passwordText.value = "Please select at least 1 criteria";
  } else {
  for(var x = 0; x < length; x++) {

    let random = Math.floor(Math.random()* charList.length);
    newPass.push(charList[random]);

    }

  passwordText.value = newPass.join("");; //After running command this will show password on screen.
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);