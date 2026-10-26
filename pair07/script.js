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


// function getSpendFuel(distance, fuelSpend){
//     return (distance / 100) * fuelSpend;
// }
//
// function getFuelPrice(fuelNeeded, price) {
//     return fuelNeeded * price;
// }
//
// function getDistancePrice(price, fuelSpend){
//     return (fuelSpend / 100) * price;
// }
//
// let City1 = prompt("Введіть назву першого міста")
// let City2 = prompt("Введіть назву другого міста")
// let distance = +prompt("Яка відстань між містами?")
// let fuelSpend = +prompt("Розхід пального")
// let price = +prompt("Вартість за 1 літр пального в грн")
//
// let fuelNeeded = getSpendFuel(distance, fuelSpend)
// let fuelPrice = getFuelPrice(fuelNeeded, price)
// let distancePrice = getDistancePrice(fuelSpend, price)
//
// console.log(`Поїздка з міста ${City1} до міста ${City2}`);
// console.log(`Відстань: ${distance} км`);
// console.log(`Розхід на 100 км: ${fuelSpend}`);
// console.log(`Ціна за літр: ${price} грн`);
// console.log(`Необхідно: ${fuelNeeded.toFixed(2)} л`);
// console.log(`Вартість 1 км: ${distancePrice.toFixed(2)} грн`);
// console.log(`Загальна сума на поїздку: ${fuelPrice.toFixed(2)} грн`);


//_____________________________________________________________________


function menu() {
    let choice;

    do {
        choice = prompt(
            "Меню програми:\n" +
            "1 — Зареєструватися\n" +
            "2 — Увійти в акаунт\n" +
            "0 — Вийти"
        );

        if (choice === "1") {
            registerUser();
        } else if (choice === "2") {
            loginUser();
        } else if (choice === "0") {
            alert("Програму завершено.");
        } else {
            alert("Такого пункту меню немає!");
        }
    } while (choice !== "0");
}

function registerUser() {
    savedLogin = prompt("Введіть логін:");
    savedPassword = prompt("Введіть пароль:");
    isRegistered = true;
    alert("Реєстрація успішна!");
}

function loginUser() {
    if (isRegistered === false) {
        alert("Спочатку зареєструйся!");
        return;
    }

    let attempts = 3;

    while (attempts > 0) {
        let login = prompt("Введіть логін:");
        let password = prompt("Введіть пароль:");

        if (login === savedLogin && password === savedPassword) {
            alert("Вхід дозволено!");
            return;
        }

        attempts = attempts - 1;

        if (attempts > 0) {
            alert("Помилка! Залишилось спроб: " + attempts);
        }
    }

    alert("Вхід заблоковано! Три невдалі спроби.");
}

let savedLogin;
let savedPassword;
let isRegistered = false;

menu()