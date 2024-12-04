// script.js

const calculate = () => {
    const value = document.querySelector('#number').value;

    // split() takes a string or regExp and splits it into an array of strings
    const array = value.split(/,\s*/g);

    // map() converts the array of strings and returns a new array without mutating the original array
    // Number() converts the string into a number of a current input value
    const numbers = array.map(value => Number(value));
};