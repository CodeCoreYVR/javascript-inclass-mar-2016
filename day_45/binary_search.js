var binarySearch = function(sortedArray, x) {
  var middleIndex = parseInt(sortedArray.length / 2);
  var result;

  // If the middle is the number; return true
  if (sortedArray[middleIndex] === x) {
    result = true;
  // If the number is less than the middle, check bottom half
  } else if (sortedArray[middleIndex] > x) {
      return binarySearch(sortedArray.slice(0, middleIndex) , x);
      // If the number is greater than the middle, check top half
  } else if (sortedArray[middleIndex] < x) {
      return binarySearch(sortedArray.slice(middleIndex + 1), x);
      // If neither, number is not in array, return false;
  } else {
    result = false;
  }
  return result;
};

console.log(binarySearch([1, 5, 8, 9], 8));
console.log(binarySearch([1, 5, 8, 9], 7));
console.log(binarySearch([], 7));
console.log(binarySearch([1], 7));
console.log(binarySearch([1,7], 7));
console.log(binarySearch([1,2], 7));
