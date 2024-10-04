// Transfer data from an existing array into a new array.
// This new array may or may not have enough space available 
// for you to copy the entirety of the data structure's elements
// into the new data structure
let transfer_data = [1,3.4,2342,324,23,423,23,12],
n = 5;//insert this many elements into the new array, irregardless of size

class ArrayX{
   constructor(capacity,curr_size=-1){
    this.capacity = capacity;
    this.data = new Array();
    this.size = curr_size;
   }
   
  insert(container_arr,element,index){
   // The new structure has a capacity of 3
    if(container_arr.size >= this.capacity){
       console.log('This data container is full');
       return -1;
    }
    
    container_arr.data[index] = element;
    container_arr.size++;
    
   return container_arr;
  }
  
}

const new_array = new ArrayX(3,-1);

for(let i = 0; i < n; i++){

  if(new_array.insert(new_array,transfer_data[i],new_array.size) != -1){
   console.log(new_array.insert(new_array,transfer_data[i],new_array.size))}
  else{
   break; // Complete the functionality: create new ArrayX to continue data transfer; take each new node and combine it into a linked list.
  }

}
