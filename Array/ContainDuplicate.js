function containDuplicate(nums){
     nums.sort((a, b) => a - b); // Sort the array in ascending order

  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      return true; // Found a duplicate element
    }
    left++;
    right++;
  }

  return false;
}