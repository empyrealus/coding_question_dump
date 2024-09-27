let matrix = [[1,1,1],[1,0,1],[1,1,1]];

function set_col_row_zero(matrix){
     let rows_m_depth = matrix.length, cols_n_span = matrix[0].length,
         zero_location_coordinate = [], //M(row)xPos/N(col)
         located = 0, find_multiple_coordinates = 0;
      
     for(let i=0; i<rows_m_depth; i++)
     {
       matrix[i].forEach((int)=>{ if(int == 0){ 
        if(located == 1){return;}
        located = 1;
       // Get position, then set all corresponding positions to the zero
       // return all node pairs/coordinates that fit the criteria
       zero_location_coordinate.push( {m:i, n:matrix[i].indexOf(int)} );
       console.log(zero_location_coordinate)
       // Set the iterators  
         let x = i, j=i; 
        matrix[i].forEach((int)=>{
        // when zero is located, set row to 0
          matrix[i][matrix[i].indexOf(1)] = 0; //index of target, assume 1
        // Locate all previous columns (lookback)
           if((x-=1) >= 0){
            matrix[x][zero_location_coordinate[0].n] = 0; 
           }  
       // Locate all subsequent columns (lookahead)    
           if((j+=1) < matrix[i].length){
            matrix[j][zero_location_coordinate[0].n] = 0;
           }
        });
       }});
       if(located == 1 && find_multiple_coordinates==0){break;}
       located = 0;
       if(zero_location_coordinate.length == 2){ //assume 2 matches are desired
         //set rows to zero, coordinate located
         //console.log(zero_location_coordinate)
         break;
       }
       console.log(zero_location_coordinate)
     }     
     
     return matrix;
} console.log(set_col_row_zero(matrix));
