const vowelCount2 = (input) => {
    let count = 0;
    for(i = 0; i < input.length; i++){
        let char = input[i].toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char === 'u' ){

            count ++;
        }

    }
    return count;
   
}


let userInput = prompt("একটি স্ট্রিং দিন:");

// ভাওয়েল গননা করা
let vowelCount = vowelCount2(userInput);

// ফলাফল প্রিন্ট করা
console.log("স্ট্রিংটিতে ভাওয়েলের সংখ্যা: " + vowelCount);