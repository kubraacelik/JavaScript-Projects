class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Y3j1E9m9PakLILPDRdLcDkbFuGDGFFwrrYR9ZQXo&base_currency="; //base_currency = alttaki firstCurrency yerine geçecek olan değerdir
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    //tam url adresi budur
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const exchangedResult = amount * result.data[secondCurrency];
    //amount = miktar input'una yazılan değer
    //result.data = tüm para birimlerindeki karşılığını gösteriyor.
    //result.data[secondCurrency] = ikinci option'da seçtiğim değerin karşılığını getir demek

    return exchangedResult;
  }
}
