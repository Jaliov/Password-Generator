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
  if(psswrdlngth  < 8 || psswrdlngth > 128) {
    alert("Your password should be between 8 and 128 characters long.")
  } else {
 var lwerChar = confirm("Would you like lowercase letters?"); 
 var uppChar =  confirm("Would you like uppercase letters?"); 
 var spclChar = confirm("Would you like special characters?");
 var numerChar = confirm("Woud you like numeric characters?");   
  }
  
 
 
 var alph = 'abcdefghijklmnopqrstuvwxyz';
 //Arrays
 //generate uppercase array
 var alphUpr = alph.toUpperCase().split('').reverse();

 //special characters array
 var spclCHARS =  ["!","#","$","%","&","()","*", "+","-",".","/",":",";","<","=",">","?","@","[","^","`","{","|","}","~","]"];
 
 //generate lowercase array
 var alphArr = alph.split('')
 
 //generate number array:
 var nums = [];
 for (var i = 0; i <= 128; i++) {
   nums.push(i);
 }
console.log(nums)
 var randNum = function() {
  return Math.floor(Math.random()*20)
}
console.log("THis is randNum :" + randNum() + " This is randNUm " + randNum())
 
   if(alphArr) {
     randNum < alphArr.length
   }
   if(alphUpr) {
    randNum < alphUpr.length
  } 
   if(spclCHARS) {
     randNum < spclCHARS.length  
   }  if(nums) {
     randNum < nums.length   
   }

var passwordJoin = [];
  
var multiArr = [alphArr, alphUpr, spclCHARS, nums];

console.log("This is : " + multiArr[0][-1])

if(lwerChar) {
  passwordJoin.push(multiArr[0][randNum()])
} else if (lwerChar=false) {
  passwordJoin.push(multiArr[-1])
}
if(uppChar) { 
  passwordJoin.push(multiArr[1][randNum()]) 
} else if (uppChar=false) {
  passwordJoin.push(multiArr[-1])
}
if(spclChar) {
  passwordJoin.push(multiArr[2][randNum()])
} else if (spclChar=false) {
  passwordJoin.push(multiArr[-1])
}if (nums) {
  passwordJoin.push(multiArr[3][randNum()])
    } else if (nums=false) {
      passwordJoin.push(multiArr[-1])
    }   
  var randNum2 = function getRandomArbitrary(min, max) {
        return Math.floor((Math.random() * (max - min) + min));
  }

  while(passwordJoin.length < psswrdlngth) {
    passwordJoin.push(multiArr[randNum2(0, 3)][randNum()])
    
  }
  

  var getPassword = document.getElementById("password");
    getPassword.innerHTML = passwordJoin.join(" ");
  }

 









    
    
    
  


  

  

 
  












