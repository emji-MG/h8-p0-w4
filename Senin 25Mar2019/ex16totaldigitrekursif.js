function totalDigitRekursif(angka) {

  var convertString = angka.toString();// 512
  if(convertString.length === 1){
    return angka;
  }else{
    var temp = Number(convertString[0]); // 5
    convertString = convertString.slice(1);// 512 -> 12
    return temp + totalDigitRekursif(Number(convertString));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5