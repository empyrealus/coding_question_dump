/* elements in the range -- basic -- 21m*/
class Solution {
    check_elements(arr, n, A, B) {
     let in_range = [], state = false, range = Math.abs(B - A);
     for(let i=0; i<n; i++){
         if(arr[i] >= A || arr[i] <= B){
             for(let x = A;x<=B;x++){
                if(x == arr[i]){
                    in_range.push(arr[i]);
                }
             }
         }
     }
     if(in_range.length == (range+1)){
        state = true;
     }
     return state;
    }
}
