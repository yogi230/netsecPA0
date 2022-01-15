//select the textarea of the plain text and cipher text
var plainArea = document.querySelector('#plainArea');
var cipherArea = document.querySelector('#cipherArea');

//clear both text field on page load
document.addEventListener('DOMContentLoaded', () => {
  plainArea.value = "";
  cipherArea.value = "";
});

//as a change is made in any text field
plainArea.addEventListener('input', toCipher);
cipherArea.addEventListener('input', toPlain);

//to convert the string character-wise
function convert(str) {
  var finalString = "";
  for (var i = 0; i < str.length; i++) {
    //check for space
    if (str[i] === ' ') {
      finalString = finalString + ' ';
    }
    else {
      var convertedChar;
      //check for the case of the character
      if (str[i]<='z' && str[i]>='a') {
        //"charCodeAt"-to extract the ASCII value of character and convert it 
        //by subtracting it from ASCII value of 'z' 
        convertedChar = String.fromCharCode("a".charCodeAt(0) + ("z".charCodeAt(0) - str.charCodeAt(i)));
      }
      else {
        convertedChar = String.fromCharCode("A".charCodeAt(0) + ("Z".charCodeAt(0) - str.charCodeAt(i)));
      }
      //append the converted character to final answer
      finalString = finalString + convertedChar;
    }

  }
  return finalString;
}

//to capture text in plain textarea and encipher it
function toCipher() {
  var originalText = plainArea.value;
  var convertedText = convert(originalText);
  cipherArea.value = convertedText;
  // console.log(originalText);
}

//to capture text in cipher textarea and decipher it
function toPlain() {
  var originalText = cipherArea.value;
  var convertedText = convert(originalText);
  plainArea.value = convertedText;
}