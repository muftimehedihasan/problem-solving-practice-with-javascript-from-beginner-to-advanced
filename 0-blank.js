// ইউজারের কাছ থেকে স্ট্রিং ইনপুট নেওয়ার জন্য prompt ব্যবহার করা হয়েছে
let userInput = prompt("একটি স্ট্রিং দিন:");

// পালিনড্রোম চেক করার জন্য ফাংশন
function isPalindrome(str) {
    // স্ট্রিং এর অক্ষরগুলো ছোট হাতের (lowercase) করতে হবে, যাতে বড় হাতের (uppercase) অক্ষরের সাথে তুলনা করা যায়
    let normalizedStr = str.toLowerCase();
    
    // ম্যানুয়ালি স্ট্রিং উল্টানো এবং তুলনা করা
    let reversedStr = "";
    
    // স্ট্রিংয়ের প্রতিটি অক্ষর উল্টানো
    for (let i = normalizedStr.length - 1; i >= 0; i--) {
        reversedStr += normalizedStr[i];
    }
    
    // উল্টানো স্ট্রিংটি মূল স্ট্রিংয়ের সাথে তুলনা করা
    return normalizedStr === reversedStr;
}

// ফলাফল প্রিন্ট করা
if (isPalindrome(userInput)) {
    console.log("স্ট্রিংটি পালিনড্রোম।");
} else {
    console.log("স্ট্রিংটি পালিনড্রোম নয়।");
}
