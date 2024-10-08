// Remove Duplicates from an Array
// একটি অ্যারে থেকে ডুপ্লিকেট ভ্যালু গুলো সরাও।


// একটি অ্যারে থেকে ডুপ্লিকেট ভ্যালু সরানোর জন্য বিভিন্ন পদ্ধতি ব্যবহার করা যায়। আমি এখানে দুটি পদ্ধতি দেখাবো:

// ১. Set ব্যবহার করে (যা ডুপ্লিকেট ভ্যালু স্বয়ংক্রিয়ভাবে সরিয়ে ফেলে)।
// ২. নেস্টেড লুপ ব্যবহার করে (ম্যানুয়ালি ডুপ্লিকেট ভ্যালু সরানো)।


// ১. Set ব্যবহার করে:
// Set হল JavaScript এর একটি বিল্ট-ইন অবজেক্ট, যা স্বয়ংক্রিয়ভাবে ডুপ্লিকেট সরিয়ে দেয়।

const removeDuplicateFromArray = (arr) => {
    let uniqArray = [...new Set(arr)];
    return uniqArray;
}

let numbers = [12, 12, 33, 44, 44];

let res = removeDuplicateFromArray(numbers);
console.log(res);