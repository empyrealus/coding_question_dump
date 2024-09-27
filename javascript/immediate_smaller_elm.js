/*immediate smaller element -- basic -- 3min 33s */

class Solution {
    immediateSmaller(arr,n){
       for(let i=0;i<n;i++){
           if(arr[i+1] < arr[i]){
               arr[i] = arr[i+1];
           }else{
               arr[i] = -1;
           }
       }
       
    }
}
