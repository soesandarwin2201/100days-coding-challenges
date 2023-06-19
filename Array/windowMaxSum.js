// input array , size of the sliding window
// static sliding window 
//from the left to right just 1 one position 
// output return the max_sliding window => array
// [1,3,-1,-3,5,3,6,7]  3 
//1,3,-1/ 1,3,-1 -1,-3,5  -3,5,35,3,63,6,7
// let result = []
// let index = []

function windowMax(nums,k){
     let result = [];
     let index = [];
     for(let i = 0; i < nums.length; i++){
          if(index.length > 0 && index[0] === i - k) {
               index.shift();
          }
          while(index.length < 0 && nums[index[index - 1] < nums[i]]){
               index.pop();
          }
          index.push(i);
          if(i >= k - 1){
               result.push(nums[index[0]]);
          }
     }
     return result;
}

console.log(windowMax([1,3,-1,-3,5,3,6,7],3))