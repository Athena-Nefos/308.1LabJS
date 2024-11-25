const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all the number are divisible by 5 
const numbers = [n1, n2, n3, n4];

let allDivisibleBy5 = true;
for (let num of numbers) {
    if (num % 5 !== 0) {
        allDivisibleBy5 = false;
        break;
    }
}

if (allDivisibleBy5) {
    console.log("All numbers are divisible by 5.")
} else {
    console.log("Not all numbers are divisible by 5.")
}

// Check if first number is larger than the last.

if (numbers [0] > numbers[numbers.length - 1]) {
    console.log("The first number is larger than the last number.");
} else {
    console.log("The first number is not larger than the last number.");
}

//Arithmetic Chains

//subtract the first number from the last number

const result = n1 - n4;

console.log(result);

//multiply the result by the third number
const finalResult = result * n3;

console.log(finalResult);

//Find the remainder of dividing the result by the fourth number

const remainder = finalResult % n4;

console.log(remainder)