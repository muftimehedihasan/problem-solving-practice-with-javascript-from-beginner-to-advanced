let userInput = prompt('Give me an string: ');

const reverseString = (str) => {
   return str.split('').reverse().join('');
}

let rev =  reverseString(userInput);
console.log(rev)