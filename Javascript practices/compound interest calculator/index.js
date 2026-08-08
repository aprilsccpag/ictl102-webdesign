function calculate() {
  const totalAmount = document.getElementById("total-amt");
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const yearsInput = document.getElementById("years");

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let years = Number(yearsInput.value);

  if (principal < 0 || isNaN(principal)) {
    principal = 0;
    principalInput.value = 0;
  }
  if (rate < 0 || isNaN(rate)) {
    rate = 0;
    rateInput.value = 0;
  }
  if (years < 0 || isNaN(years)) {
    years = 0;
    yearsInput.value = 0;
  }

  const result = principal * Math.pow(1 + rate / 1, 1 * years);

  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}

var totalWays = document.getElementById("total-ways");
var totalWoRep = document.getElementById("wo-rep");
var totalWithRep = document.getElementById("with-rep");

var letterInput = document.getElementById("letter-amt");
var numberInput = document.getElementById("number-amt");
var specialInput = document.getElementById("special-amt");

function calcu() {
  let numLetters = Number(letterInput.value);
  let numDigits = Number(numberInput.value);
  let numSpecial = Number(specialInput.value);

  let letters = 26;
  let digits = 10;
  let specialChar = 8;

  // calculate TotalWays
  waysResult = numLetters + numDigits + numSpecial;
  totalWays.textContent = waysResult.toLocaleString();

  // calculate totalWoRep
  let norep = [];
  for (let i = numLetters; i > 0; i--) {
    let letterCount = letters - i + 1;
    norep.push(letterCount);
  }
  for (let o = numDigits; o > 0; o--) {
    let digitCount = digits - o + 1;
    norep.push(digitCount);
  }
  for (let p = numSpecial; p > 0; p--) {
    let specialCount = specialChar - p + 1;
    norep.push(specialCount);
  }

  let norepProduct = 1;
  for (let b = 0; b < norep.length; b++) {
    norepProduct *= norep[b];
  }
  let resultNoRep = norepProduct;
  totalWoRep.textContent = resultNoRep.toLocaleString();

  // calculate totalWithRep
  const letterProduct = Math.pow(letters, numLetters);
  const digitProduct = Math.pow(digits, numDigits);
  const specialProduct = Math.pow(specialChar, numSpecial);
  const resultWithRep = letterProduct * digitProduct * specialProduct;
  totalWithRep.textContent = resultWithRep.toLocaleString();
  //totalWithRep.innerHTML = resultWithRep;
}

function eraseInput() {
  letterInput.value = undefined;
  numberInput.value = undefined;
  specialInput.value = undefined;

  totalWays.textContent = "";
  totalWoRep.textContent = "";
  totalWithRep.textContent = "";
}
