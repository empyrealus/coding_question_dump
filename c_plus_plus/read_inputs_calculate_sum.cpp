#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

#define INPUT_CAPACITY 3 // preprocessor

//Instantiate the Prototype
int accumulatX(int arr[INPUT_CAPACITY] = nullptr,int=0);

int main() {
     int *numArray; // instantiated in heap
     
     // created dynamically @compile, values are @runtime mutable,
     // capacity is immutable @compile
     numArray = new int [INPUT_CAPACITY];

     int total = 0;
   
   while(cin){  
     for(int i=0; i<INPUT_CAPACITY;i++)
       cin >> numArray[i];
    break; //prevent overflow
   }
     cout << accumulatX(numArray,total);
    
    delete numArray; //clean up
    return 0;
}

// Custom Accumulate
int accumulatX(int myArray[INPUT_CAPACITY], int total)
{
    for(int i=0;i<INPUT_CAPACITY;i++)
     {
         total = total + myArray[i];
     }
     return total;
}
