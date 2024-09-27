/* count of integers -- Hard -- 15m 14s solve time */ 

let num1 = "1",
    num2 = "12",
    min_sum = 1, 
    max_sum = 8;
    
function digit_sum(){
   let good_int = [];
  
   
   for(let i=Number(num1); i <= Number(num2);i++){
      if(i <= 9 && i <= max_sum){
       good_int.push(i);
      }else{
       let string = String(i), math = 0;
        Array.from(string).forEach((val)=>{
           math += Number(val);
        });
        if(math <= max_sum){good_int.push(math);}
      }
     
   }
   console.log(good_int.length + '__ count');
   
  return (good_int.length % (Math.pow(10,9)+7));
}    
digit_sum()
