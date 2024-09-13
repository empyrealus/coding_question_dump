// Question: Find the Peak element in the array of n size, containing n elements, where a 'peak' is the the value that is greater than or equal to its' neighbors.
// Requested Performance: O(log(n)), 
// This algorithim utilizes a lookback and lookahead to compare an index(i) to its immediate neighbors.
// Asked by: Google, Amazon, Visa, Adobe

let n = Number(7),
array = [1,1,1,2,1,1,1];
function peak(n=0, array=[]){
  for(let i=0; i<n;i++){
   let peaks = [];
   for(let i=0;i<n;i++){
       switch(true){
        case (i==0):{//min-case
         peaks.push(i);
        }continue;
        case (i==(n-1)):{//max-case
          if(array[i] >= array[i-1]){
          peaks.push(i);
        }continue;
        default:{//body-case
           if(array[i] >= array[i-1] && array[i] >= array[i+1]){
           peaks.push(i);
        }continue;
       }
   } 
   return peaks; 
}peak(n, array);
