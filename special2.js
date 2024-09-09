function restaurantProfit() {
    let pizzaPrice = 1000;
    let burgerPrice = 300;
    let juicePrice = 123;
    let waterPrice = 20;

    let PizzaSellPriceMonthly = 30 * (pizzaPrice * 50);
    let bugerSellPriceMonthly = 30 * (burgerPrice * 100);
    let juiceSellPriceMonthly = 30 * (juicePrice * 100);
    let waterSellPriceMonthly = 30 * (waterPrice * 50);

    let totalSellOfMonth = PizzaSellPriceMonthly + bugerSellPriceMonthly + juiceSellPriceMonthly + waterSellPriceMonthly

    let totalCostOfMonth = (15000 * 5) + 30000;

    let totalProfit = totalSellOfMonth - totalCostOfMonth;
    console.log(totalProfit)

}

restaurantProfit()