// Assignment Code
var generateBtn = document.querySelector("#generate");
var password=document.getElementById("password");

 function writePassword() {
   //declaring variables
    var lChars = "abcdefghijklmnopqrstuvwxyz";
    var uChars = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
    var sChars = "!@#$%^&*()";
    var nChars = "0123456789";
    //user prompted variables
    var passwordLength = window.prompt("Please enter the length of the password 8 -128")
  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Please Try Again")
    return window.location.reload
  }
  lowerCaseStringBoolean = window.confirm("Lowercase Letters?")
  upperCaseStringBoolean = window.confirm("Uppercase Letters?")
  numericBoolean = window.confirm("Numbers?")
  specialCharacterBoolean = window.confirm("Special Characters?")
  //checking to meet conditions
  var checkCount = lowerCaseStringBoolean + upperCaseStringBoolean + numericBoolean + specialCharacterBoolean;
    console.log(checkCount)
  var checks = [{ lowerCaseStringBoolean} , {upperCaseStringBoolean} , {numericBoolean} , {specialCharacterBoolean}]
    console.log(checks)
    if (checkCount === 0) {
      window.alert("Please try again and select at least 1 option")
      return window.location.reload
    }
//creating different strings based on differnet criteria 
    var lCharsString = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * lChars.length);
   lCharsString += lChars.substring(randomNumber, randomNumber +1);
  }
console.log(lCharsString)

var uCharsString = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * uChars.length);
   uCharsString += uChars.substring(randomNumber, randomNumber +1);
  }
console.log(uCharsString)

var sCharsString = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * sChars.length);
   sCharsString += sChars.substring(randomNumber, randomNumber +1);
  }
console.log(sCharsString)

var nCharsString = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * nChars.length);
   nCharsString += nChars.substring(randomNumber, randomNumber +1);
  }
console.log(nCharsString)

//combined strings to pull to make new password
var passwordlist = ""; 

console.log(lowerCaseStringBoolean)
console.log(upperCaseStringBoolean)
console.log(specialCharacterBoolean)
console.log(numericBoolean)


//why doesn't this work?!
if (lowerCaseStringBoolean === true){
  return lCharsString.concat(passwordlist)
}
if(upperCaseStringBoolean === true) {
  return uCharsString.concat(passwordlist) 
}
if (specialCharacterBoolean === true) {
  return sCharsString.concat(passwordlist)
}
if (numericBoolean === true) {
  return nCharsString.concat(passwordlist)
}

console.log(passwordlist)

//final part to take combined strings to make random password
// var password = ""
// for (var i = 0; i <=passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() *passwordlist.length)
//   password += passwordlist.substring(randomNumber, randomNumber +1);
// }



        document.getElementById("password").value = password;
 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
