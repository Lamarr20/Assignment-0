function isPalindrome(word) {
  let bool = false
  for(let x =0; x<=word.length-1; x++) {
    for(let y = (word.length-1); y>=0; y--) {
      if(word[x] == word[y])
        bool = true
      else
        {break;}
    }
    return bool

  }
  // Insert code here;
}

// Do not edit this line;
module.exports = isPalindrome;