/**
 * This class is responsible for finding all pairs of integers
 * within an array which sum to a specified value.
 */
class PairFinder {

  constructor(array = [], sum = 0) {
    this.array = this.sort(array);
    this.sum = sum;
  }

  /**
   * Sorts the array in ascending order
   * @param {Array} the array to be sorted
   * @return {Array} the sorted array
   */
  sort(array) {
    return array.sort((a, b) => {
      return a > b;
    });
  }
}

export default PairFinder;

// function findPairs(arr, sum) {
    
//   var i = 0, 
//       j = 1,
//       count = 0,
//       computedSum = 0,
//       sortedArray = arr.sort(function(a, b) {
//         return a > b;
//       }),
//       length = sortedArray.length;
  
//   console.log(sortedArray);
    
//   for (i = 0 ; i < length; i++) {
    
//     for (j = i; j < length; j++) {
//         count++;
//         computedSum = sortedArray[i] + sortedArray[j];
//         if (computedSum === sum) {
//           console.log("pair: " + sortedArray[i] + ", " + sortedArray[j]);
//         } else if (computedSum > sum) {
//           break;
//         }                
//     }        
    
//   }
  
//   console.log("optimization count: " + count);

// }

// findPairs([4,5,7,9,-4,-1,-6, 2, 1], 3);

//[ -6, -4, -1, 1, 2, 4, 5, 7, 9 ] 