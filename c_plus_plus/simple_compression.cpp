int main() {
    string x; vector<string> sX;
    do{
        cin >> x; sX.push_back(x);
    }while(cin);
    sX.pop_back();
    for(auto i=0; i<sX[0].length();i++){
        if(isdigit(sX[0][i])){
            int myInt = (sX[0][i]-48);
            char myChar = sX[0][i-1];
            cout << string(myInt, myChar);
        }
    }
    return 0;
}
