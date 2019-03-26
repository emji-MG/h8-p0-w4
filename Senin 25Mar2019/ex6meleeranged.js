function meleeRangedGrouping (str) {
  //your code here
var arr = str.split(",")
 var temp = []
 var temp2 = []
 var ranged = []
 var melee = []
 var result = []

for(i = 0; i<=arr.length-1; i ++)
{
  temp.push(arr[i])
  temp2.push(temp[i].split("-"))
}

for(j = 0; j <= temp2.length-1 ; j++){
  if(temp2[j][1] == 'Ranged')
  {
    ranged.push(temp2[j][0])
  }
  if(temp2[j][1] == 'Melee')
  {
    melee.push(temp2[j][0])
  }
}
if(ranged.length !=0 || melee.length !=0)
{
result.push(ranged)
result.push(melee)
}
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []