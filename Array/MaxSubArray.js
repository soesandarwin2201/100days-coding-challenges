// input [] integr
// output return the max_sum of the subarray
//sliding window

// [5,4,-1,7,8]


function maxSumSubArray(nums) {
     let max_sum = -Infinity;
     let current_sum = 0;
   
     for (let i = 0; i < nums.length; i++) {
       current_sum += nums[i];
   
       if (current_sum > max_sum) {
         max_sum = current_sum;
       }
   
       if (current_sum < 0) {
         current_sum = 0;
       }
     }
   
     return max_sum;
   }

console.log(maxSumSubArray([1]));