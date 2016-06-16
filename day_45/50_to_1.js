var downTo1 = function(x){
  if(x > 0) {
    console.log(x);
    downTo1(x - 1);
  }
}

downTo1(50);
