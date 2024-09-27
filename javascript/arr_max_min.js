/* Max and Min product from 2 arrays -- basic -- 29s*/
class Solution {
    // Function to find the maximum element from array arr1 and
    // the minimum element from array arr2 and return their product.
    findMultiplication(arr1, arr2) {
        return (Math.max(...arr1)*Math.min(...arr2));
    }
}
