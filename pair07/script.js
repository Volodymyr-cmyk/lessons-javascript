// function showMessage() {
//     console.log("Hello world");
// }
//
// showMessage();

// function showProduct(name, price = "немає у наявності") {
//     console.log(`Товар ${name}: ${price} грн`);
// }
//
// showProduct("Notebook", 15000);
// showProduct("Notebook");


// function calculate(price, count) {
//
//     return price * count;
// }
// let total = calculate(1000, 4);
// console.log(total);

// function discount(total) {
//     if (total >= 5000){
//         return 10;
//     }
//     else{
//         return 0;
//     }
// }
// let discount1 = +prompt("Enter a number");
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//     return price * count;
// }
//
// function getDiscount(total){
//     if (total >= 10000){
//         return 0.15;
//     }
//     else if (total >= 5000){
//         return 0.1;
//     }
//     else if (total >= 2000){
//         return 0.05
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter product price");
// let productCount = +prompt("Enter product count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal} грн`);
// console.log(`Знижка: ${discount} %`);
// console.log(`Сума знижки: ${productDiscountValue} грн`);
// console.log(`До сплати: ${productFinalPrice} грн`);


//__________________________________________________--


function getSpendFuel(fuel){
    return fuel / 100;
}

function getDistancePrice(price, fuel){
    return fuel * price;
}

let City1 = prompt("Введіть назву першого міста")
let City2 = prompt("Введіть назву другого міста")

