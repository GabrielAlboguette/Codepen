var real = document.querySelector("#val");
var valorEmEthereum = document.querySelector("#ethereum");
var valorEmEuro = document.querySelector("#euro");
var valorEmBtc = document.querySelector("#btc");

function currencyConverter() {
  var ethereum = parseFloat(real.value) / 8003.8;
  valorEmEthereum.value = ethereum.toFixed(4);

  var euro = parseFloat(real.value) / 5.56;
  valorEmEuro.value = euro.toFixed(2);

  var btc = parseFloat(real.value) / 117797.37;
  valorEmBtc.value = btc.toFixed(4);
}

const converterBotton = document.querySelector("button");
converterBotton.onclick = currencyConverter;
