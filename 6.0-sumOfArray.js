// ২য় স্তর: লুপ এবং কন্ডিশনাল স্টেটমেন্ট (প্রাথমিক+)

let numbers = [12, 45, 66, 7, 878, 7];

const sumOfAllArry = (arr) => {
    let sum = 0;
    for(i = 0; i < arr.length; i ++){
        sum +=arr[i];
        // sum = sum + arr[i];
    }
    return sum;
}

let sumAll = sumOfAllArry(numbers);
console.log(sumAll);