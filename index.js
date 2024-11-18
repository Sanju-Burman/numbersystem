const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];
function evenOdd(x) {
    if (x % 2 === 0) return "Even"
    return "Odd";
}
for (let i = 0; i < numbers.length; i++) {

    console.log(`${numbers[i]} is: `, evenOdd(numbers[i]));
}