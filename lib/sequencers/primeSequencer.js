function isPrimeNumber (num) {
  if (num <= 3) {
    return true
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false
  }

  let i = 5
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }

    i += 6
  }

  return true;
}

function primeSequencer () {
    let currentNumber = 0;

    return () => {
      currentNumber += 1;

      while (!isPrimeNumber(currentNumber)) {
        currentNumber += 1;
      }

      return currentNumber;
    }
}

export const isPrimeNumber = isPrimeNumber;
export default primeSequencer;
