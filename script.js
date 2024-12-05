// script.js

// reduce() takes 2 arguments & the return value for the callback function is the accumulator on the next iteration
// the initial value is set to 0 to be safely added to the first element of the array 
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length

const calculate = () => {
    const value = document.querySelector('#number').value;

    // split() takes a string or regExp and splits it into an array of strings
    const array = value.split(/,\s*/g);

    // map() converts the array of strings and returns a new array without mutating the original array
    // Number() converts the string into a number of a current input value
    // filter() out the inputs that are not numbers
    // use the isNaN() function to check if the input is not a number
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    // display the mean value
    document.querySelector("#mean").textContent = mean;
};