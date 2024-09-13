#include <iostream>
#include <string>
using namespace std;

#define max_strings 2

int main() {
  string *mystrings; 
    mystrings = new string[max_strings];
    
   int i=0;
    while(cin){
       if(i == max_strings) break;
         cin >> mystrings[i];
         i++;
       continue;//prevent overflow on multiline input
    }

int result[max_strings]; 
for(int x=0;x<(max_strings+1);x++){ 
    
if(x < max_strings){ //line 1
    if(false != (result[x]=((mystrings[x].size() > 0) ? mystrings[x].size(): false )))
        {cout << result[x]<< " ";}
     continue;
  }else{ //line n{rules}
      for(int j=0;j<max_strings;j++){
            // Rule 1
            cout<<"\n"<<mystrings[j]+mystrings[j+1]<<"\n";
            // Rule 2
            char temp = mystrings[j][0];
            mystrings[j][0] = mystrings[j+1][0];
            mystrings[j+1][0] = temp;
            cout<<mystrings[j]<<" "<<mystrings[j+1]<<"\n";
           break;
      }
  } 
  break;
}
return 0;
}
