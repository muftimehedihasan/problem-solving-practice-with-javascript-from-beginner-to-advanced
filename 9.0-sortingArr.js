let nums = [5, 7, 8, 3, 5, 6];

for (let i =0; i < nums.length; i++){
    let minimumIndex = i;
    for (let i2 = i + 1; i2 < nums.length; i2++){
        if(nums[i2] < nums[minimumIndex]){
            minimumIndex = i2;
        }
    }

    if (minimumIndex !== i) {
        let temp = nums[i];
        nums[i] = nums[minimumIndex];
        nums[minimumIndex] = temp;        
    }

}

console.log(nums);