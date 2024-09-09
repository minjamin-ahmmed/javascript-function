function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) === false || typeof livingCost !== 'number') {
        return 'invalid input'
    }


    let tax = 0;
    let totalIncome = 0
    for (let item of arr) {

        if (item >= 3000) {
            tax = item * 0.2;
        }

        totalIncome = totalIncome + item;
    }

    let totalCost = totalIncome - tax;
    let savings = totalCost - livingCost;

    if (savings < 0) {
        return "Earn More"
    }

    else if (savings > 0) {
        return `Saivings: ${savings}`
    }

    return savings;

}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]))