let userInput = prompt('give me an intger: ');

const reversedStringMnullay = (str) => {
    let reversedString = '';
    for(i = str.length - 1; i >= 0; i--){
        reversedString += str[i];
        //   reversedSrting =   reversedSrting + str[i];
    }
    return reversedString;
}

let reverse = reversedStringMnullay(userInput);
console.log(reverse);