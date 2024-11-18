const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];
function prime(x) {
    for (i = 2; i < (x / 2); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
let primeArray = [];
let sumof = 0;
for (let i = 0; i < numbers.length; i++) {
    if (prime(numbers[i])) {

        primeArray.push(numbers[i]);
        sumof += numbers[i];
    }

}
console.log(primeArray);

const min = Math.min(...primeArray)
const max = Math.max(...primeArray)
console.log(min);
console.log(max);
console.log("sum of Prime Numbers is ", sumof);