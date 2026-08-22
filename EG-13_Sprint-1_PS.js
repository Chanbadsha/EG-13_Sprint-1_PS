function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// console.log(isLeapYear(2000));

function generateFibonacci(n) {
  const fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  return fibonacci;
}

// console.log(generateFibonacci(7));

function findGCD(a, b) {
  let x = 0;
  if (b > a) {
    x = a;
  } else {
    x = b;
  }

  for (let i = x; i >= 1; i--) {
    if (a % i == 0) {
      if (b % i == 0) {
        return i;
      }
    }
  }
}

// console.log(findGCD(30, 10));

function findLCM(a, b) {
  function findGCD(x, y) {
    while (y !== 0) {
      let remainder = x % y;
      x = y;
      y = remainder;
    }

    return x;
  }

  return Math.abs(a * b) / findGCD(a, b);
}

// console.log(findLCM(12, 18));

function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPrime(23));
