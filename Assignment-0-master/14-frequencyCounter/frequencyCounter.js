function frequencyCounter(word) {
  let count = {} 
for(let i = 0; i < word.length; i++){
  if (count[word[i]])
    count[word[i]] += 1
  else 
    count[word[i]] = 1
}
  return count
  // Insert code here;
}

// Do not edit this line;
module.exports = frequencyCounter;