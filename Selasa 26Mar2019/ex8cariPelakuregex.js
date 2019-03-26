  function cariPelaku(str) {
    // you can only write your code here!
    var x = (str.match(/abc/g));
    var y = 0;
    for(i = 0; i<=x.length-1;i++)
    {
      if(x[i] == 'abc')
      {
        y = y+1;
      }
    }
    return y
  }

  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2