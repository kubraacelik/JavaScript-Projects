convertDecimalToBinary(52);

function convertDecimalToBinary(number) {
  let binary = "";

  while (number) {
    binary += (number % 2).toString();
    number = Math.floor(number / 2);

    if (number == 1) {
      //bölüm 1 olursa döngüyü kır
      binary += 1; //en sonki bölümde 1 olduğu için binary kısmın sonuna 1 ekledik
      break;
    }
  }

  let result = reverse(binary);
  console.log("Sonuç = " + result);
}

function reverse(binary) {
  //binary sayıyı ters çevirir
  let reverseBinary = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }

  return reverseBinary;
}
