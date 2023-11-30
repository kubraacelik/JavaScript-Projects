//Mükemmel Sayı Bulma
//6 = 1,2,3,6 -->1+2+3+6=12 12=6*2
//28 = 1,2,4,8,14,28 --> 1+2+4+7+14+28=56 56=28*2

isPerfectNumber(28);

function isPerfectNumber(number) {
  let score = 0;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      score += i;
    }
  }

  score += 1 + number;

  if (score == number * 2) {
    alert("Number is perfect...");
  } else {
    alert("Number isn't perfect...");
  }
}
