// ২য় স্তর: লুপ এবং কন্ডিশনাল স্টেটমেন্ট (প্রাথমিক+)

let numbers = [5, 10, 15, 20, 25];

sumOfArray =(arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i];
    }
    return sum;
}

let totalSum = sumOfArray(numbers);
console.log(totalSum);