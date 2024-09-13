  /*
  *  Declare a RegExp object variable named 're'
  *  It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
  */
function regexVar() {
  let re = /(?<f>^[a,e,i,o,u]).*(\k<f>)$/;
    return re;
}
