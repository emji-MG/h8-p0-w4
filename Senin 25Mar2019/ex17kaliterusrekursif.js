function kaliTerusRekursif(angka) {
// you can only write your code here!
  var temp = angka.toString()

  if(temp.length == 1){
      return temp
  }else{
    var multiply = 1;
    for(var i=0 ; i<temp.length ; i++){
      multiply = multiply * Number(temp[i])
    }
  }
  return kaliTerusRekursif(multiply)
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6