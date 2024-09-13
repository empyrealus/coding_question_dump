//Find the next largest value to the right of a value at a given 
//Index in an array

vector<int> arr; int input;
 vector<int> ngeStore;
 
int main(){ 
   
 int *iterator, *T; 
    iterator = new int; T = new int;
    *iterator = 0; *T=0;
    do{
        if(*iterator == 0){
            cin >> *T;  // Get Cases
        }else{
         cin >> input;
         arr.push_back(input);
        }
        (*iterator)++;
    }while(cin);
    arr.pop_back();//cin overflow
   delete iterator; //deAllocate memory
   
   for(int i = 0; i < *T; i++){      
        if(arr[i] < arr[i+1]){
            ngeStore.push_back(arr[i+1]);
        }else{
            ngeStore.push_back(-1);
        }
   }
     for (auto& elt : ngeStore) {
        printf("%i ", elt);
    } 
}
