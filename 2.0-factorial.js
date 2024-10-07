// Factorial of a Number

// একটি সংখ্যা নাও এবং তার ফ্যাক্টোরিয়াল বের করো।


let numbers = parseInt(prompt(''));

const calculat = (n) => {
    if(n < 0) {
        return 'pls positive';
    }
    let factorial = 1;
    for( let i = n; i > 0; i--){
        factorial *=i;
    }
    return factorial;
}

let caL = calculat(numbers);
console.log(caL);