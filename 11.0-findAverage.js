// ৩য় স্তর: ফাংশন এবং অ্যারে (মাঝারি)

function findAverage(arr) {
    let sum = 0;

    // প্রতিটি উপাদানের যোগফল নির্ণয় করা
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // গড় নির্ণয় করা (sum / arr.length)
    let average = sum / arr.length;
    return average;
}

// উদাহরণ অ্যারে
let numbers = [10, 20, 30, 40, 50];

// ফাংশন কল করা এবং গড় বের করা
let avg = findAverage(numbers);
console.log("অ্যারের গড়:", avg);
