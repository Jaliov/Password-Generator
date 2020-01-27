// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var psswrdlngth = prompt("How many characters long would you like your password")
  if (psswrdlngth < 8 || psswrdlngth > 128) {
    alert("Your password should be between 8 and 128 characters long.")
  } else {
    var lwerChar = confirm("Would you like lowercase letters?");
    var uppChar = confirm("Would you like uppercase letters?");
    var spclChar = confirm("Would you like special characters?");
    var numerChar = confirm("Woud you like numeric characters?");
  }

  //Arrays
   //generate lowercase array
   var alph = 'abcdefghijklmnopqrstuvwxyz';
   var alphArr = alph.split('')
 
  //generate uppercase array
  var alphUpr = alph.toUpperCase().split('').reverse();

  //special characters array
  var spclCHARS = ["!", "#", "$", "%", "&", "()", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "]"];
 
  //generate number array:
  var nums = [];
  for (var i = 0; i <= 128; i++) {
    nums.push(i);
  }

  //generate random numbers
  console.log(nums)
  var randNum = function () {
    return Math.floor(Math.random() * 20)
  }
  var randNum2 = function(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
  }

  if (alphArr) {
    randNum < alphArr.length
  }
  if (alphUpr) {
    randNum < alphUpr.length
  }
  if (spclCHARS) {
    randNum < spclCHARS.length
  }
  if (nums) {
    randNum < nums.length
  }

  var passwordJoin = [];

  var multiArr = [alphArr, alphUpr, spclCHARS, nums];

  while (passwordJoin.length < psswrdlngth) {
    if (lwerChar == false) {
      passwordJoin.push(multiArr[randNum2(1, 3)][randNum()])
    } else if (uppChar == false) {
      passwordJoin.push(multiArr[randNum2(2, 3)][randNum()]) 
      + passwordJoin.push(multiArr[0][randNum()])
    } else if (spclChar == false) {
      passwordJoin.push(multiArr[randNum2(0, 1)][randNum()])
      + passwordJoin.push(multiArr[3][randNum()])
    } else if (numerChar == false) {
      passwordJoin.push(multiArr[randNum2(0, 2)][randNum()])
    } else {
      passwordJoin.push(multiArr[randNum2(0, 3)][randNum()])
    }
  }

  var getPassword = document.getElementById("password");
  getPassword.innerHTML = passwordJoin.join(" ");
}