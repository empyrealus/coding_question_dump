/* Don't remember if this is the correct solution */

int N = cacheX.size() - 1; // N == sample size
for(int i=0;i<cacheX.size();i++){
	
	// Search Needle
	cacheX[i] // starting at = 0
	cacheY[i] // starting at = 1
      
       // Search Engine (using a sample size)
          for(int x=1;x<N;x++){
 	     if(cacheX[i] == cacheX[x] && cacheY[i] == cacheY[x]){
                          //remove item at x
			 cacheX.erase(cacheX.begin()+x); 
    			 cacheY.erase(cacheY.begin()+x);
			 break;
		}
            }
      // Decrease sample size, since previous items have been checked
     N -= 1; // Subtract 1 from N
}
