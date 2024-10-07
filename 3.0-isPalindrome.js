let userInput = prompt('');

const isPalindrome = (str) => {
    let normalizedStr = str.toLowerCase();

    let rversedStr = "";
    
    for(let i = normalizedStr.length - 1; i >=0; i--) {
        // rversedStr += normalizedStr[i];
        rversedStr += normalizedStr[i];
    }
    return normalizedStr === rversedStr;
    
}

if(isPalindrome(userInput)) {
    console.log('palindrom');
} else {
    console.log('no')
}