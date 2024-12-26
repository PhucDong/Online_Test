// 19 / 54
// 19 % 54 = 19
// 190 % 54 = 3, r: 28
// 280 % 54 = 5, r: 10
// 100 % 54 = 1, r: 46
// 460 % 54 = 8, r: 28
// 280 % 54 = 5, r: 10
// 100 % 54 = 1, r: 46
// 460 % 54 = 8, r: 28

// Assume given 2 integers, p & q (q !== 0)
// If p % q === 0 => p/q has no decimal numbers

// else if p % q !== 0 => p/q has decimal numbers
// if q has only prime factors such as 2 and/or 5 => p/q has no repeating decimals

// if q has prime factors other than 2 and/or 5
// take result of p % q = remainder0
// (remainder0 * 10) % q = remainder1
// (remainder0 * 10) / q = result1
// push remainder1 & result1 to an empty array
// loop (array.includes(result))
// continue (remainder of prev calculation * 10) % q = remainder
// continue (remainder of prev calculation * 10) / q = result
// if result already in the array => terminate loop

// const num1 = 19;
// const num2 = 54;

function checkNumberHasPrimeFactorsTwoAndFive(num) {
  while (num % 2 === 0) {
    num /= 2;
  }

  while (num % 5 === 0) {
    num /= 5;
  }

  // After divisible to 2 & 5, final result should be 1
  // if not => num has 2, 5 and others as prime factors
  return num === 1;
}

function getDecimalsFromTwoNumbers(p, q) {
  if (p % q === 0) {
    console.log("No decimals found. Result: ", p / q);
  } else if (p % q !== 0) {
    // console.log(checkNumberHasPrimeFactorsTwoAndFive(q));
    if (checkNumberHasPrimeFactorsTwoAndFive(q)) {
      console.log("No repeating decimals found. Result: ", p / q);
    } else {
      //   let result = p / q;
      let remainder = p % q;
      let result = parseInt((remainder * 10) / q); // 3
      remainder = (remainder * 10) % q; // 28
      let resultList = [{ result, remainder }];

      // stuck here because don't know how to loop
    }
  }
}

getDecimalsFromTwoNumbers(19, 54);
