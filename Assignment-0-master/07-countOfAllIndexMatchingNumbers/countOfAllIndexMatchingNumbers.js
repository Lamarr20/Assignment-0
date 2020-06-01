function countOfAllIndexMatchingNumbers(nums) {
  let hold = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] == i)//if element[i] = value
        hold++
    /*for (let x = 1; x < nums.length; x++) {
      
      if (nums[i] == nums[x])//if array share common number
        hold = hold 
    }*/
  }
  return hold
  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;