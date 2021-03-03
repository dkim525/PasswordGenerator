var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialchar =  ["+", "-",  "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

function createPassword() {
  
  var passLength = parseInt(
    prompt("Choose Between 8 & 128 Characters")
  );
  if (passLength < 8){
    alert("There is not enough characters")
    return;
  }
  if (passLength > 128){
    alert("There are too many characters")
    return;
  }

  var isLowercase = confirm("Click OK to confirm lowercase values");
  var isUppercase = confirm("Click OK to confirm uppercase values");
  var isNumberic = confrim("Click OK to confrim numberic values");
  var isSpecial = confirm("Click OK to confirm special character values");
  
  // Potential combinations based on confirm selections
  if (isLowercase && isUppercase && isNumberic && isSpecial){
    criteria = lowercase.concat(uppercase, numbers, specialchar);
  }
  else if (!isLowercase && isUppercase && isNumberic && isSpecial){
    criteria = uppercase.concat(numbers, specialchar);
  }
  else if (isLowercase && !isUppercase && isNumberic && isSpecial){
    criteria = lowercase.concat(numbers, specialchar);
  }
  else if (isLowercase && isUppercase && !isNumberic && isSpecial){
    criteria = lowercase.concat(uppercase, specialchar);
  }
  else if (isLowercase && isUppercase && isNumberic && !isSpecial){
    criteria = lowercase.concat(uppercase, specialchar);
  }
  else if (!isLowercase && !isUppercase && isNumberic && isSpecial){
    criteria = numbers.concat(specialchar);
  }
  else if (!isLowercase && isUppercase && !isNumberic && isSpecial){
    criteria = uppercase.concat(specialchar);
  }
  else if (!isLowercase && isUppercase && isNumberic && !isSpecial){
    criteria = uppercase.concat(numbers);
  }
  else if (isLowercase && !isUppercase && !isNumberic && isSpecial) {
    criteria = lowercase.concat(specialchar);
  }
  else if (isLowercase && !isUppercase && isNumberic && !isSpecial) {
    criteria = lowercase.concat(numbers);
  }
  else if (isLowercase && isUppercase && !isNumberic && !isSpecial){
    criteria = lowercase.concat(uppercase);
  }
  else if (isLowercase && !isUppercase && !isNumberic && !isSpecial) {
    criteria = lowercase;
  }
  else if (!isLowercase && isUppercase && !isNumberic && !isSpecial) {
    criteria = uppercase;
  }
  else if (!isLowercase && !isUppercase && isNumberic && !isSpecial) {
    criteria = numbers;
  }
  else if (!isLowercase && !isUppercase && !isNumberic && isSpecial){
    criteria = specialchar;
  }
  else if (!isLowercase && !isUppercase && !isNumberic && !isSpecial){
    criteria = alert("You must choose criteria")
  }
  var password = [];

  for (var i = 0; i < enter; i++) {
      var random = criteria[Math.floor(Math.random() * criteria.length)];
      password.push(random);
  }
  
  var final = alert(password)
};



