#include <bits/stdc++.h> 
#include <regex>

int findIndexOf(string a, string b){
    vector<int> indexes;
    regex bRx (a);
    for(auto i= sregex_iterator(b.begin(), b.end(), bRx); i != sregex_iterator(); ++i)
    {indexes.push_back(i->position());} //iterator for indexes

    if(indexes.size() > 0){
        for (int N : indexes) {return N;} //return indexes
    } else {return -1;} //if no index, return 0
}
