function calcu() {
  const totalWays = document.getElementById("total-ways");
  const totalWoRep = document.getElementById("wo-rep");
  const totalWithRep = document.getElementById("with-rep");

  const letterInput = document.getElementById("letter-amt");
  const numberInput = document.getElementById("number-amt");
  const specialInput = document.getElementById("special-amt");

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
