function removeDuplicatesUsingSet(arr) {
    // Set ব্যবহার করে অ্যারেকে ইউনিক মানগুলোতে রূপান্তর করা
    let uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

// উদাহরণ অ্যারে
let numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// ডুপ্লিকেট সরানো
let result = removeDuplicatesUsingSet(numbers);
console.log("ডুপ্লিকেট ছাড়া অ্যারে:", result);
