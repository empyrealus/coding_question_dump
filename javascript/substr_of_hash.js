function val(char){
  let start = char.charCodeAt(0);
  return start - 96;
}
function hash(sub,p,m){
 let k = sub.length, i = 0, hash =[], hash_prop = 0;
   Array.from(sub).forEach((ch)=>{ 
        hash_prop =  ( val(ch) * Math.pow(p,i) );
        hash.push(hash_prop);
       i++;
   });
   hash_prop=0;//clear out props
   hash.forEach((int)=>{
     hash_prop += int;
   })
   return hash_prop % m;
}

function hash_sub_search(s,p,m,k,h){
   let substring = [], sub=[];
   for(let i=0;i< s.length ;i++){
     // place pairs into array up to k length
      for(let y=0; y<k;y++){
      // build pairs of k-length
            sub.push(s[y+i]);
              if(y==(k-1) ){
               // push pairs of k-length to substring
               substring.push(sub.join(''));
              }
      }
      sub = [];
     //find the first match
     if(hash(substring[i],p,m)==h){
      console.log('your match is '+substring[i]);
      return;
     }
   }
 }
hash_sub_search("leetcode",7,20,2,0);
