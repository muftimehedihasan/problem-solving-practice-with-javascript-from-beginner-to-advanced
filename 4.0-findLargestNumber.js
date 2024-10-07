// Find the Largest Number in an Array
// একটি অ্যারের মধ্যে সবচেয়ে বড় সংখ্যা বের করো।

let nums = [12, 34, 5, 67, 56];

const findLergestNum = (arr) => {
    let lerge = arr[0];
    for ( i= 1; i <arr.length; i++ ){
        if(arr[i] > lerge){
            lerge = arr[i];
        }
    }
    return lerge;
}

let fl= findLergestNum(nums);
console.log(fl);