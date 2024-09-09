function shoppingCart(soap, shampoo, dress, toy) {

    let soapPrice = 50 * soap;

    let shapmooPrice = 550 * 0.2;
    let totalShampooPrice = (shapmooPrice + 550) * shampoo;

    let dressPrice = 2000 * dress;

    let toyPrice = 500 * toy;


    let discountSoapPrice = 0;
    let afterDiscountSoapPrice = 0;

    if (soapPrice > 500) {
        //20% discount will be counted
        discountSoapPrice = soapPrice * 0.2;
        afterDiscountSoapPrice = soapPrice - discountSoapPrice;
    }



    let discountDressPrice = 0;
    let afterDiscountDressPrice = 0;

    if (dressPrice > 5000) {
        //40% discount will be counted
        discountDressPrice = dressPrice * 0.4;
        afterDiscountDressPrice = dressPrice - discountDressPrice;

    }


    let taxToyPrice = 0;
    let afterTaxToyPrice = 0;
    if (toyPrice > 2200) {

        //30% discount will be counted
        taxToyPrice = toyPrice * 0.3;
        afterTaxToyPrice = toyPrice + taxToyPrice;

    }


    return total = soapPrice + totalShampooPrice + afterDiscountDressPrice + toyPrice;


}

let output = shoppingCart(5, 2, 5, 4)
console.log(output);