// Return median of two sorted arrays of the same size.

// Using anonymous function
function medianOfArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
}
  
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  
  console.log(medianOfArrays(array1, array2));
  
  // Using IIFE
  (function() {
    function medianOfArrays(arr1, arr2) {
      const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
      const length = mergedArray.length;
      const mid = Math.floor(length / 2);
  
      if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
      } else {
        return mergedArray[mid];
      }
    }
  
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
  
    console.log(medianOfArrays(array1, array2));
  })();