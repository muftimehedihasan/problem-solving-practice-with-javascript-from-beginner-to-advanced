// Fibonacci Sequence
// প্রথম ১০টি ফিবোনাচ্চি সংখ্যা প্রিন্ট করো।

const printFibonacci = () => {
    let fibnacciSeries = [0, 1];

    for (let i = 2; i < numbers; i++) {
        let nextNumber = fibnacciSeries[i -1] + fibnacciSeries[i -2];
        fibnacciSeries.push(nextNumber);

    }
    console.log(fibnacciSeries);
}

printFibonacci(10);