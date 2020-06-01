function countOfAllBooleans(arr) {
  let hold = 0
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] === false || arr[i] === true)
      hold++
  }
  return hold
  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllBooleans;