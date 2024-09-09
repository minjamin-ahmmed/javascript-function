function averageOfOddNumbers(numbers) {

    let oddNumbers = [];
    for (let number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number);
        }
    }


    let sum = 0;
    for (let odd of oddNumbers) {
        sum = sum + odd;
    }

    let average = sum / (oddNumbers.length)
    return average;


}

let numbers = [1, 3, 5, 7, 765, 2, 12, 65, 87];
let output = averageOfOddNumbers(numbers)
console.log(output.toFixed(2));