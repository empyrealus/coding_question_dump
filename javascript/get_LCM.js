/* find the LCM */
let lcm_multiples = [], lcm_min = 0,
lcm_input = [10, 20, 50];
function LCM(){
let result;
   function get_gcd(a,b){
    if(!b||b==0){return a;}
         // return divisor
       return get_gcd(b, (a % b)); 
   }
 return {
    get_lcm: (lcm)=>{
       result = lcm[0];
      lcm.forEach( (value)=>{
       result = ((value * result ) / get_gcd(result, value));
                   });  
       return result;
    }
 };
}
console.log(LCM().get_lcm(lcm_input));
