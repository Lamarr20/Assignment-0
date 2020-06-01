function pairSum(nums, target) {
  let test = 0
  let bool = false
  if(nums.length>1){
  for(let x=0; x<nums.length; x++){
    for(let y=0; y<nums.length; y++){
      test = nums[x] + nums[y]
      if(test == target)
        bool = true
    }
  }

  return bool
}
else
  return console.error("number <= 1");
  // Insert code here;
}

// Do not edit this line;
module.exports = pairSum;