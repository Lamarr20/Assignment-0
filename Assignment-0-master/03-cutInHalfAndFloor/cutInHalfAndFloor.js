function cutInHalfAndFloor(num) {
  if (num % 2 == 0 )
    return (num/2)
  else
    num = (num + 1) / 2 //makes num even
    num = num - 1 // "round" number up
    return num
  // Insert code here;
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;