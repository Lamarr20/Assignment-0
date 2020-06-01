function fizzBuzz(start, end) {
  let arr = []
  for(let i =0; start<=end; i++) {
    arr[i] = start
    if((start) % 3 == 0) 
      arr.splice(i, 1, "Fizz")
    if((start) % 5 == 0) 
      arr.splice(i, 1, "Buzz")
    if ((start) % (3*5) == 0)
      arr.splice(i, 1, "FizzBuzz")
    start++
  }
  //console.log(arr)
  return arr
  // Insert code here;
}

// Do not edit this line;
module.exports = fizzBuzz;