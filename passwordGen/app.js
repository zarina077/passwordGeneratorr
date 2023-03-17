const inpuT = document.querySelector(".inpuT")
const CharacterAmountRange = document.getElementById("CharacterAmountRange")
const CharacterAmountNumber = document.getElementById("CharacterAmountNumber")
 const passwords = document.getElementById("passwords");

 const UpperCase = document.querySelector(".UpperCase")
 const LowerCase = document.querySelector(".LowerCase")
 const Numbers = document.querySelector(".Numbers")
const Symbols = document.querySelector(".Symbols")

const LOWER_CHAR_CODES = arrayFormLowToHigh(65, 90)
 const UPPERCASE_CHAR_CODES = arrayFormLowToHigh(97, 122)
 const NUMBER_CHAR_CODES = arrayFormLowToHigh(48, 57)
 const SYMBOLS_CHAR_CODES = arrayFormLowToHigh(33, 47).concat(
    arrayFormLowToHigh(58, 64)
 ).concat(
    arrayFormLowToHigh(91, 96)
 ).concat(
    arrayFormLowToHigh(123, 126)
 ); 

 CharacterAmountNumber.addEventListener("input",syncCharacterAmount)
CharacterAmountRange.addEventListener("input",syncCharacterAmount)

 passwords.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = CharacterAmountNumber.value
    const includeUppercase = UpperCase.chaked;
    const includeLowercase = LowerCase.chaked;
    const includeSymbols = Symbols.chaked;
    const includeNumbers = Numbers.chaked;
    const password = generatePassword(includeNumbers, characterAmount, includeSymbols, includeUppercase, includeLowercase)
inpuT.innerText = password;
 })
function generatePassword(includeNumbers, characterAmount, includeSymbols, includeUppercase, includeLowercase){
    let charCodes = LOWER_CHAR_CODES
    if(includeUppercase) charCodes = charCodes.concat
    (UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat
    (NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat
    (SYMBOLS_CHAR_CODES)
    const passwordCharecters = []
    for(let i = 0; i < characterAmount; i++){
       const charecterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharecters.push(String.fromCharCode(charecterCode))
        return passwordCharecters.join("")
    }
    console.log(UPPERCASE_CHAR_CODES)
}
function arrayFormLowToHigh(low, high){
    const array = []
    for(let i = low; i <= high; i++){
array.push(i)
    }
    return array
}

 function syncCharacterAmount(e){
    const value = e.target.value
    CharacterAmountNumber.value = value;
CharacterAmountRange.value = value;
 }