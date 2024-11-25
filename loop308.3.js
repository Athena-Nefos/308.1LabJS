// count down to from 10 to 1

for (let i = 10; i >=1; i--) {
 //   console.log(i);
}

//Output odd numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0){
//        console.log(i);
    }
}

//Output even number from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
//        console.log(i);
    }
}

// Output multiples of 3, starting at 6 and ending at 60

for (let i = 6; i <= 60; i += 3) {
//    console.log(i);
}

// Output an increasing number of # symbols, from 1 to 7, as shown below.
for (let i = 1; i <= 7; i++) {
//    console.log('#'.repeat(i));

}

//* write a for loop that iterates from 1 to 20

//for (let i = 1; i <= 20; i++)
//    console.log(i);

//* Print out all the Prime numbers
for (let i = 1; i <= 20; i++) //{
//if (isPrime(i)) {
//    console.log(`${i} is prime`)
//  }
//}
// Function to check if a number is prime
//function isPrime(num) {
//    if (num < 2) return false; //1 is not prime
//    for (let j = 2; j <= Math.sqrt(num); j++) {
//        if (num % j === 0) return false; //not prime if divisible by any number other than 1 and the number itself
//    }
//    return true; //Prime if no divisors were found
//}

// * Print “even” for all even numbers

{
 if (i % 2 === 0) {
    console.log(`${i} is even`);
 }
}