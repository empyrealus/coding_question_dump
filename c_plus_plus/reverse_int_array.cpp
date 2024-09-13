#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
   vector<int> items; int my_input;
    do{
      cin >> my_input; 
      items.push_back(my_input);
    }
    while(cin); 
    items.pop_back(); //remove overflow
    reverse(items.begin(), items.end());
    items.erase(items.begin() + items.back());
    for(auto& n : items){printf("%d ", n);};
    return 0;
}
