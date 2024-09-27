/* Subarrays with sum K -- Medium -- 11min 38sec solve time */

 let arr = [9, 4, 20, 3, 10, 5],
 k = 33,
 N = 6;
 
 class Solution {
 findSubArraySum(arr,n,k){
       let sub_arrays_count = 0;
       
       for(let i =0; i<(n-1); i++){
           let accumulator = arr[i];
           
           for(let x=0; x<(n-1);x++){
               if (accumulator == k) {
                   sub_arrays_count = x;
               }
               accumulator += arr[x];
           }
            
       }
       
       return sub_arrays_count;
    }
}

const solve = new Solution().findSubArraySum(arr,N,k)
console.log(solve);
