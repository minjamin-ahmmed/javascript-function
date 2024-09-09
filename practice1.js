function stationary(book, pen, notebook, bag) {

    let bookPrice = 300;
    let penPrice = 50 + (50 * 0.05);
    let notebookPrice = 120;
    let bagPrice = 800;

    //Pen Price Calculation
    let totalPenPrice = pen * penPrice;

    //Book Price Calculation
    let totalBookPrice = book * bookPrice;

    let discountBookPrice = 0;
    let afterDiscount = 0
    if (totalBookPrice > 1500) {
        //get 10% discount
        discountBookPrice = totalBookPrice * 0.1;
        afterDiscount = totalBookPrice - discountBookPrice;
    }

    //NoteBook Price Calculation
    let totalNotebookPrice = notebook * notebookPrice;

    let discountNotebookPrice = 0;
    let afterDiscountNotebookPrice = 0
    if (totalNotebookPrice > 1000) {
        //get 15% discount
        discountNotebookPrice = totalBookPrice * 0.15;
        afterDiscountNotebookPrice = totalNotebookPrice - discountNotebookPrice;
    }

    //Bag price Calculation
    let totalBagPrice = bag * bagPrice;

    let vatBagPrice = 0;
    let afterVatBagPrice = 0
    if (totalBagPrice > 2000) {
        vatBagPrice = totalBagPrice * 0.07;
        afterVatBagPrice = totalBagPrice + vatBagPrice
    }


    let totalPrice = totalPenPrice + totalBagPrice + totalBookPrice + totalNotebookPrice;

    return totalPrice


}

let output = stationary(3, 4, 6, 2)
console.log(output)