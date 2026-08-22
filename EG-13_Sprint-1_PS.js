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

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5, 2], [2, 4, 6, 8]));

function findMedian(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  const middle = Math.floor(sortedNums.length / 2);

  if (sortedNums.length % 2 !== 0) {
    return sortedNums[middle];
  }

  return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
}

console.log(findMedian([7, 1, 3, 4, 9]));

function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(findSecondLargest([10, 20, 4, 45, 99, 99]));

function findMode(arr) {
  const frequency = {};
  let mode = null;
  let maxCount = 0;

  for (const item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;

    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mode = item;
    }
  }

  return mode;
}

console.log(findMode([1, 3, 3, 2, 1, 3, 4]));

function naturalSort(arr) {
  return [...arr].sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
    }),
  );
}

console.log(naturalSort(["file10.txt", "file2.txt", "file1.txt"]));
