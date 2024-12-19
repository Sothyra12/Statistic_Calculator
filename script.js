// script.js

// reduce() takes 2 arguments & the return value for the callback function is the accumulator on the next iteration
// the initial value (acc) is set to 0 to be safely added to the first element of the array
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  // use toSorted() to sort and create new arrays for better practices
  const sorted = array.toSorted((a, b) => a - b);
  return sorted.length % 2 === 0
    ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
    : sorted[Math.floor(sorted.length / 2)];
};

const getMode = (array) => {
  const counts = {};
  array.forEach(el => {
    // assignment = condition ? exprIfTrue : exprIfFalse
    counts[el] = counts[el] ? counts[el] + 1 : 1;
  });
  // new Set() creates a new object with unique values
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a,b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
};

const calculate = () => {
  const value = document.querySelector("#number").value;

  // split() takes a string or regExp and splits it into an array of strings
  const array = value.split(/,\s*/g);

  // map() converts the array of strings and returns a new array without mutating the original array
  // Number() converts the string into a number of a current input value
  // filter() out the inputs that are not numbers
  // use the isNaN() function to check if the input is not a number
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  // display the mean value
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};

// Example of the median logic
const logic = () => {
  const testArr1 = [1, 2, 3, 4, 5];
  const testArr2 = [1, 2, 3, 4, 5, 6];
  const isEven = testArr2.length % 2 === 0;
  console.log(isEven);
  const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
  console.log(oddListMedian);
  const evenListMedian = getMean([
    testArr2[testArr2.length / 2 - 1],
    testArr2[testArr2.length / 2],
  ]);
  console.log(evenListMedian);
};