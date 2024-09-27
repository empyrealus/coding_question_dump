/* find the sum of a matrix */
let matrix = [ [5,3,2] , [3,2,5] , [3,342,231]],
    m_sum = 0;
function matrix_sum(m){
  for(let i=0;i<m.length;i++){
    m[i].forEach((int)=> m_sum += int);
  }
}matrix_sum(matrix);
console.log(m_sum); //output O(nm)
