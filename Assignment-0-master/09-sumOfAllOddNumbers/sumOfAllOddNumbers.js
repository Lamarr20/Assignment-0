function sumOfAllOddNumbers(nums) {
  let addMe = 0
  for (let i = 0; i<nums.length; i++) {
    if ((nums[i] % 2) != 0) 
      addMe++ //=+ nums[i]
  }
  return addMe
  // Insert code here;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;