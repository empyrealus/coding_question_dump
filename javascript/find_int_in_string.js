let prop = "soin(*29392ajskn)";
function isNumber(target){
  let number_regex = /[0-9]/,numbers = [];
   Array.from(target).forEach( 
     (ch) => {
        if (number_regex.test(ch) === true) 
          numbers.push(ch);
       }
    )
  return numbers;
} console.log(isNumber(prop));
