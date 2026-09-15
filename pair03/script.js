//1

// let years = +prompt("Скільки років? ")
// if (years <= 18){
//     console.log("Дорослий")
// }
// else if (years > 12){
//     console.log("Підліток")
// }
// else {
//     console.log("Дитина")
// }

//2

// const login = "admin";
// const password = "12345";
//
// let user_login = prompt("Enter username");
// let user_password = +prompt("Enter password");
// if (user_login === login && user_password === password) {
//     console.log("Вхід дозволено")
// }
// else {
//     console.log("Вхід заборонено")
// }

//3

// let day = +prompt("Введи номер дня тижня")
//
// if (!(day <1 && day > 7)) {
//     switch (day) {
//         case 1:
//             console.log("Понеділок");
//             break;
//         case 2:
//             console.log("Вівторок");
//             break;
//         case 3:
//             console.log("Середа");
//             break;
//         case 4:
//             console.log("Четвер");
//             break;
//         case 5:
//             console.log("Вівторок");
//             break;
//         case 6:
//             console.log("Середа");
//             break;
//         case 7:
//             console.log("Четвер");
//             break;
//         default:
//             console.log("Невірний день")
//     }
// }

//4

let productname = prompt("Введи назву товару");
let productprice = +prompt("Введи вартість товару");
let productcount = +prompt("Введи кількість товару");
let discountcard = confirm("Чи є у тебе дисконтна карта?");
let deliverytype = prompt("Delivery: courier, post, pickup");

let totalprice = productprice * productcount;

//<2000 - 0%
//>2000 - 5%
//>5000 - 10%
//>10000- 15%

let shopdiscount = 0;
if (totalprice >= 10000) {
    shopdiscount = 15;
}
else if (totalprice >= 5000) {
    shopdiscount = 10;
}
else if (totalprice >= 2000) {
    shopdiscount = 5;
}

//<2000 - 5%
//>2000 - 10%
//>5000 - 12%
//>10000- 15%

let shopdiscountcard = 0;
