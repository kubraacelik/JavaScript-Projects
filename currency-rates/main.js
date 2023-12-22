// Elementleri seçtik
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

//Currency class'ını kullanmak için nesne türettik
const currency = new Currency();

runEventListeners();

function runEventListeners() {
  // input'un içine bir değer eklenince exchange fonksiyonu çalışsın
  amountInput.addEventListener("input", exchange);
}

function exchange() {
  //input'un içindeki değer string olduğu için number'a çevirdik
  const amount = Number(amountInput.value.trim());
  //ilk option'un içindeki options'lardan o anki seçili olan değerin içeriğini aldık
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  //ikinci option'un içindeki options'lardan o anki seçili olan değerin içeriğini aldık
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  //function exchange ve class içindeki exchange farklıdır
  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(3); //virgülden sonra 3 sayı getir
    });
}
