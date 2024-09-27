function fibonacci(seed,limit){
  var all_values = [], final_value = null, index=null;
  
  function create_sequence(seed,limit,index){
     for(let i=0; i<limit; i++){ 
     switch(true){
          case (i==0):{
               all_values.push(Number( ( seed[i]+seed[i+1] ) )); 
          }break;
          default:
            all_values.push( Number( (all_values[(i-1)] + ( (all_values[i-2] == undefined)?0: all_values[i-2] )) ) );
      }  
     }
        console.log(all_values);
     return all_values[index];
   }
   
   final_value  = all_values[all_values.length];
   return {
      get_index:(seed, set_limit, index)=>{
         return create_sequence(seed,set_limit,index)
      }
   };
}

console.log( fibonacci().get_index([0,1],10,7) );
