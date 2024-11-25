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