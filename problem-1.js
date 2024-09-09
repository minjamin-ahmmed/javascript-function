function calculateMoney(ticketSell) {

    if (ticketSell < 0) {
        return "Invalid Number"
    }

    let securityBill = 500;
    let lunchBill = 50;
    let totalLunchBill = 8 * lunchBill;

    let totalCost = securityBill + totalLunchBill;

    let ticketSellMoney = ticketSell * 120;

    let remainingMoney = ticketSellMoney - totalCost;
    return remainingMoney;

}

let output = calculateMoney(10)
let output2 = calculateMoney(1055)
let output3 = calculateMoney(93)
let output4 = calculateMoney(-130)

console.log(output, output2, output3, output4)