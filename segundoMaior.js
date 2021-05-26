const testCase = ['2','3','6','6','5','7'];
function segundoMaior(nums){
    let second=-1;
    let first=nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i]
        }

        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }
    return second;
}
console.log(segundoMaior(testCase));