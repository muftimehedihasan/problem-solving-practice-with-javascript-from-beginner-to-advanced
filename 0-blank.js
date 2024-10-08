// একটি অ্যারে তৈরি করা হয়েছে
let numbers = [5, 10, 15, 20, 25];

// সব সংখ্যার যোগফল বের করার ফাংশন
function sumOfArray(arr) {
    let sum = 0;  // যোগফল সংরক্ষণ করার জন্য ভেরিয়েবল

    // অ্যারের প্রতিটি সংখ্যার উপর লুপ চালানো
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // প্রতিটি সংখ্যাকে যোগ করা হচ্ছে
    }

    return sum;  // যোগফল ফেরত দেয়া হচ্ছে
}

// ফাংশনটি ব্যবহার করে যোগফল বের করা
let totalSum = sumOfArray(numbers);
console.log("অ্যারের সব সংখ্যার যোগফল: " + totalSum);
