/* reverse a linked list --  easy */

class Solution{
 
 reverse(head){
  if(head === null) return null;
  
  let prev = null, 
      current_node = head, 
      next_node = head.next;
  
   while(next_node !== null){
     
     // set new node
     next_node = current_node.next;
     
     current_node.next = prev;  
     
     prev = current_node;
     
     // don't forget to shift the node
     current_node = next;
   }    
      return prev;
 }
 
}
