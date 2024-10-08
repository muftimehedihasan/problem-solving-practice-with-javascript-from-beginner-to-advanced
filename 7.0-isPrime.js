// প্রাইম সংখ্যা যাচাই করার ফাংশন

const isPrime = (num) => {
    if(num <= 1){
        return false
    }

    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

userInput = parseInt(prompt("give an int"))

if(isPrime(userInput)) {
    console.log("prime")
} else {
    console.log("not Prime")
}