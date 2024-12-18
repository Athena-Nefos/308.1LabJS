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

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//* const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// * const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const isVAlid = isSum50 && isTwoOdd && isUnder25 && isUnique;
// Finally, log the results.
console.log(isValid);