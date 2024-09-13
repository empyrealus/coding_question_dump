function getMaxLessThanK( x={n:Number(0)}, y={k:Number(0)} ){
    let i=1, answer = 0, arr, fin = Number(
       (arr = { red: (aArray)=>{
        return aArray.reduce(
        (acc, curr)=>{
         let min;
             for(let j=i+1;j<=x;j++){
                min = (aArray[i] & aArray[j]);
                if(min > answer && min < y){
                   answer = min;
                }
             }
            i++
            return answer;
            },i
         )}
        },arr.red([...Array(Math.abs(x+1)).keys()]))
       );
       i, answer, arr = null;
    return fin;
}  
