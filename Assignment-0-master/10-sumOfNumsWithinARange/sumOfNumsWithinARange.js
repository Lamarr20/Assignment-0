function sumOfNumsWithinARange(nums, start, end) {
  let addMe = 0
  //let hold = start
  for(start; start<=end; start++) {
    if(nums[start] == nums[end] && start == end )
      addMe++
    if(nums[start] != nums[end])
      addMe++
    else
      addMe
  }
  return addMe
  // Insert code here;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;