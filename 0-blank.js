// ইউজারের কাছ থেকে সংখ্যা নেওয়ার জন্য prompt ব্যবহার করা হয়েছে
let number = parseInt(prompt("একটি সংখ্যা দিন:"));

// ফ্যাক্টোরিয়াল বের করার জন্য ফাংশন
function calculateFactorial(num) {
    if (num < 0) {
        return "ফ্যাক্টোরিয়াল শুধু পজিটিভ সংখ্যার জন্য হয়";  // নেগেটিভ সংখ্যার ফ্যাক্টোরিয়াল হয় না
    }
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;  // প্রতিটি সংখ্যাকে গুণ করা হচ্ছে
    }
    return factorial;
}

// ফ্যাক্টোরিয়াল প্রিন্ট করা
let result = calculateFactorial(number);
console.log("ফ্যাক্টোরিয়াল: " + result);
