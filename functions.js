
const addToZero = (arr) => {

   for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length - 1; j++){
        if (arr[i] + arr[j] === 0){
            return true
        } 
    }
   }
   
   return false
}

// Runtime Guess - For my addToZero function, I utilized a nested for loop meaning that the runtime is O(n^2) or Quadratic. 
// Space Guess - Constant Space


// // tests:
// console.log(addToZero([]));
// // -> False
// console.log(addToZero([1]));
// // -> False
// console.log(addToZero([1, 2, 3]));
// // -> False
// console.log(addToZero([1, 2, 3, -2]));
// // -> True


const hasUniqueChars = (str) => {

    let comparisonStr = ''

    for (let i = 0; i < str.length; i++) {
        if (comparisonStr.includes(str[i]) === false){
            comparisonStr += str[i]
        } else {
            return false
        }
    }
    return true
}

// Runtime Guess - For my hasUniqueChars function, I utilized a singular for loop that is being run as many times as the string length, which means the runtime is O(n) or Linear. 
// Space Guess - Linear Space

// // Tests:
// console.log(hasUniqueChars("Monday"));
// // -> True
// console.log(hasUniqueChars("Moonday"));
// // -> False
// console.log(hasUniqueChars("fufy"));
// // -> False
// console.log(hasUniqueChars("Ravished"));
// // -> True

function isPangram(string){
    let compareStr = 'abcdefghijklmnopqrstuvwxyz'
    let newString = string.toLowerCase().replaceAll(' ', '')
    for (i = 0; i < newString.length; i++){
      for (j = 0; j < compareStr.length; j++){
        if(compareStr[j] === newString[i]){
          compareStr = compareStr.replace(compareStr[j], '')
        }
        if (compareStr === ''){
          return true
        }
      }
    }
    if (compareStr !== '') {
      return false
    }
  }

// Runtime Guess - For my isPangram function, I utilized a nested for loop meaning that the runtime is O(n^2) or Quadratic. 
// Space Guess - Linear Space

// //Tests: 
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True
// console.log(isPangram("I like cats, but not mice"));
// // -> False

const findLongestWord = (arr) => {
    let longestLengthWord = arr[0].length

    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > longestLengthWord){
            longestLengthWord = arr[i].length
        }
    }

    return longestLengthWord
}

// Runtime Guess - For my findLongestWord function, I utilized one for loop meaning that the runtime is O(n) or Linear. 
// Space Guess - Linear Space

//Tests: 
console.log(findLongestWord(["hi", "hello"]));
// // -> 5
console.log(findLongestWord(["hi", "hello", "sleepy", "son", "supercalifragilisticexpialidocious", "froth"]));
// // -> 34