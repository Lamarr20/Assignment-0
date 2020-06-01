function titleCaseEdit(title) {
  
    //var str = "How are you doing today?";
    var res = title.split(" ");
    var hold, hold2 = ""
    for (let i =0; i<res.length; i++){
      console.log( 
        hold = res[i].replace(res[i].charAt(0), res[i].charAt(0).toUpperCase())
      )
      //last string subtract " "
      if(i+1 == res.length)
        hold2 = hold2 + hold
      else
        hold2 = hold2 + hold + " "
    }
    console.log(hold2)
    hold = hold2
    hold.toString
    return hold

}

// Do not edit this line;
module.exports = titleCaseEdit;