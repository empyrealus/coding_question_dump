// https://leetcode.com/discuss/interview-question/4024498/IBM-Software-Developer-2023-2024-(Full-Time)-HackerRank

#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;


int sorted(vector<int> bits);

int main() {
    vector<int> Ebyte; vector<int> Ebit;
    int push_byte, byte_size;
    // get the input
    do{
        cin >> push_byte;
        Ebyte.push_back(push_byte);
    }
   while(cin);
   Ebyte.pop_back();//remove overflow
  
   // break up multiple strings into seperate char bits
   for(int oX = 0; oX <Ebyte.size(); oX++ ){ 
    string newBittt = to_string(Ebyte[oX]);
    byte_size = newBittt.length();
 
    // break up byte into bits
     for(int i=0;i<byte_size;i++){
       Ebit.push_back((int)newBittt[i]);//char codes
    }
  }
    sorted(Ebit);
}

// ASCII 48=0, 49=1
int sorted(vector<int> bits){
      sort(bits.begin(), bits.end());
      vector<int> zero_bits;
      vector<int> one_bits;
      int flips_needed;
      
      // Convert and sort, place divide bits into seperate entities
          
        for(const int& i : bits){
         if(i == 48){zero_bits.push_back(0);}else{one_bits.push_back(1);}
        }
        
        // Determine flips
        if(zero_bits.size() > one_bits.size()){
            flips_needed = one_bits.size();
        }else if (zero_bits.size() < one_bits.size()){
            flips_needed = zero_bits.size();
        }else if(zero_bits.size() == one_bits.size()){
            flips_needed = one_bits.size();
        } 
    cout << flips_needed;
   return flips_needed;
}


/* Another solution */

Vector<int> bit1;
Vector<int> bit0;
Int flips_needed;

For(int x=0;x<input_string.size();x++){
     // get 1s
     if(input_string[x] == 1){
      Bit1.push_back(1);
     }else{
	// assume 0 … we are using bits
	bit0.push_back(0);
    }    
}

if(Bit1.size() > bit0.size()){
  //convert zeros to 1’s
   flips_needed = bit0.size();
}else if (Bit1.size() < bit0.size()) {
 // convert 1’s to zeros
	flips_needed = bit1.size();
}
else if (Bit1.size() == bit0.size()) {
      flips_needed = bit1.size();
}
