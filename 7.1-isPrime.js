
const isPrime =(n) => {
    if(n <= 1){
        return false;
    }

    for(i = 2; i < n; i++){
        if(n % i === 0){
           return false;
        }
    }
    return true;
}

let userInput = parseInt(prompt(''));

if(isPrime(userInput)){
    console.log(userInput + " ", 'prime' );
}
else {
    console.log(userInput + "", 'notPrime');
}