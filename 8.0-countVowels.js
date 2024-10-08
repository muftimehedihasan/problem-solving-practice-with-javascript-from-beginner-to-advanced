
const countVowels = (inpuString) => {
    let vowelPattern = /[aeiou]/gi;

    let vowels = inpuString.match(vowelPattern);

    return vowels ? vowels.length : 0;
}

let userInput = prompt("Give ans string");

let vowelCount = countVowels(userInput);

console.log("স্ট্রিংটিতে ভাওয়েলের সংখ্যা: " + vowelCount);


// const countVowels = (inputString) => {
//     let vowelPattern = /[aeiou]/gi;

//     let vowels = inputString.match(vowelPattern);

//     return vowels ? vowels.length : 0;
// }

// let userInput = prompt("Give a string");

// let vowelCount = countVowels(userInput);

// console.log("স্ট্রিংটিতে ভাওয়েলের সংখ্যা: " + vowelCount);
