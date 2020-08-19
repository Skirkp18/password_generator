// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = clickButton();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// returns a string
function clickButton() {

  //  ==============    var definitions   ==================

  // Array of special characters to be included in password
  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  var userOptionalChars = [];

  // ============= functions definitions ==================

  function getUserOptions() {
    // get options form user and store in vars

    // check for length (should be longer than 8 and shorter than 128)
    var numChars = 0;
    if (numChars < 8 || numChars > 128) {
      prompt("How many charcters do you want your password to be? (Must be between '8' and '128' characters)");
      while (numChars < 8 || numChars > 128) {
        alert("Your password must be between 8 and 128 characters long. Please try again");
        var numChars = prompt("How many charcters do you want your password to be? (Must be between '8' and '128' characters)");
      }
    }

    // set vars to false
    var expectSpecialChars = false;
    var expectNumericChars = false;
    var expectLowerCaseChars = false;
    var expectUpperCaseChars = false;

    // if statement
    if (expectSpecialChars === false && expectNumericChars === false && expectLowerCaseChars === false & expectUpperCaseChars === false) {

      // check if user wants special characters
      var expectSpecialChars = confirm("Click 'OK' to use special charcters in your password.")
      // check if user wants numeric characters
      var expectNumericChars = confirm("Click 'OK' to use numerical charcters in your password.")
      // check if user wants lower case   
      var expectLowerCaseChars = confirm("Click 'OK' to use lower case charcters in your password.")
      // check if user wants upper case charaters
      var expectUpperCaseChars = confirm("Click 'OK' to use upper case characters in your password.")


      // check that atleast one is true

      while (expectSpecialChars === false && expectNumericChars === false && expectLowerCaseChars === false & expectUpperCaseChars === false) {
        // alert user must have at least one option
        alert("You must choose at least one option 'Special Characters', 'Numeric Characters', 'Lower Case Characters' or 'Upper Case Characters'.")

        // check if user wants special characters
        var expectSpecialChars = confirm("Click 'OK' to use special charcters in your password.")
        // check if user wants numeric characters
        var expectNumericChars = confirm("Click 'OK' to use numerical charcters in your password.")
        // check if user wants lower case   
        var expectLowerCaseChars = confirm("Click 'OK' to use lower case charcters in your password.")
        // check if user wants upper case charaters
        var expectUpperCaseChars = confirm("Click 'OK' to use upper case characters in your password.")

        console.log("did i get this far?")
      }
    }

  }


  function generatePassword(userOptions) {
    var password = [];

    console.log(parseInt(Math.random() * 26));

    // for satement to generate 

    // if lower
    if (expectLowerCaseChars === true) {
      // push a random lower char to password 
      push.password(lowerCasedCharacters.indexOf(Math.random() * 26));

    }


    // if upper
    // push a random upper char to password 
    // add upperCharsArray to userOptionalChars


    // if special
    // push a random special char to password 
    // add specialCharsArray to userOptionalChars


    // if numeric
    // push a random numeric char to password 
    // add numericCharsArray to userOptionalChars

    // for loop between start number of elements in password to the requested number of chars

    // mutate the array to a string
    // return password string



  }

  // ============= function calls ==================

  getUserOptions();

  // generatePassword(userOptions);






};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
