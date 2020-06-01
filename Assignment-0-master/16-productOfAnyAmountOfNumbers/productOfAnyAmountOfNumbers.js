function productOfAnyAmountOfNumbers(...args) {
  let test = [...args]
  let multi
  for(let i =0; i< test.length; i++){
    if(i==0)
      multi = 1 * test[i]
    else 
      multi = multi * test[i] 
  }
  return multi

  // Insert code here;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;