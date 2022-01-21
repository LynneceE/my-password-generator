// password variables

var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNum = "0123456789";
var charSpc = "!@#$%^&*()";
var generateBtn = document.getElementById("#generate");
var pssWrd = [];

// beginning prompt

window.alert("Welcome! Let's generate your new password.");
var pssWrdLength = window.prompt("How long should your password be?");
 

// check password length
if (pssWrdLength <8) {
      window.alert("I recommend a password that's at least 8 characters long.");
      window.prompt("How long should your password be?");
}  else if (pssWrdLength > 8); {

// check which characters to include

  charUpper = window.confirm("Do you want to include upper case letters?");
  charLower = window.confirm("Do you want to include lower case letters?");
  charNum = window.confirm("Do you want to include numbers?")
  charSpc = window.confirm("Do you want to include any special chracters (!@#$%^&*) ?")

  if (charUpper = true) {
    (pssWrd.push(charUpper));
  }
  if (charLower = true) {
    (pssWrd.push(charLower));
  }
  if (charNum = true) {
    (pssWrd.push(charNum));
  }
  if (charSpc = true) {
    (pssWrd.push(charSpc));
  }
}

var newPass = pssWrd.join("");

var myPssWrd = "";

// create loop with math floor and math random to generate password

for (var i = 0; i < pssWrdLength; i++){
  var generatePass = newPass.charAt(Math.floor(Math.random()* newPass.length));
  myPssWrd = myPssWrd.concat(generatePass);
}

//after the loop alert the user to click the button to show password

window.alert("All done! Click 'Generate Password' to see your new password");





// Write password to the #password input
document.getElementById('generate').onclick = function() {
  document.getElementById('password').textContent = myPssWrd;
}
