 #include<vector>
 #include<iostream>
 using namespace std;
 int main(){
 int Ni = 13; int Nm; //Nm = Nth math, Ni = Nth initial
 int radix = 2; // radix = some conversion index
 vector<int> binary; // binary storage
 do{
      Nm = floor(Ni/radix);
      Nm = Ni - (Nm * radix);
      binary.push_back((Nm));
      Ni = floor(Ni/radix);     
  }while(Ni!=0); 
  reverse(binary.begin(), binary.end());//correct binary order
}
