let event;
let startPrice = 0;

while (startPrice === 0) {
    let choice = +prompt("Оберіть тип події:\n" +
        "1 - Кіно (150грн)\n" +
        "2 - Театр (220грн)\n" +
        "3 - Концерт (350грн)")
    switch (choice) {
        case 1:
            event = "Кіно"
            startPrice = 150;
            break;
        case 2:
            event = "Театр"
            startPrice = 220;
            break;
        case 3:
            event = "Концерт"
            startPrice = 350;
            break;
        default:
            alert("Оберіть варіант з перелічених")
    }
}

let day;
while (day !== 1 && day !== 2) {
    day = +prompt("Оберіть тип дня:\n" +
        "1 - Будній\n" +
        "2 - Вихідний (+15%)")
    if (day !== 1 && day !== 2) {
        alert("Оберіть 1 або 2")
    }
}

let ticketPrice = startPrice;
if (day === 2) {
    ticketPrice = startPrice * 1.15;
}
console.log(`Ціна квитка: ${ticketPrice.toFixed(2)} грн`);

let countTicket = 0;
while (Number.isNaN(ticketPrice) || countTicket < 1 || countTicket >6) {
    countTicket = +prompt("Виберіть кількість квитків (від 1 до 6):");
    if (Number.isNaN(ticketPrice) || countTicket < 1 || countTicket > 6) {
        alert("Введіть число від 1 до 6")
    }
}

for (let i = 1; i <= countTicket; i++) {
    console.log(`Квиток ${i} з ${countTicket}`)
}

let processedTickets = 0;
let freeTickets = 0;
let discountTickets = 0;
let fullPriceTickets = 0;
let totalSum = 0;

let age = +prompt("Введіть свій вік: ");
while (Number.isNaN(age) && age >= -1 && age <= 90) {
    alert("Введіть коректний вік")
    if (age === -1) {
        console.log("Оформлення завершено");
        break;
    }
}

let price = ticketPrice;

if (age <= 5) {
    price = 0;
}else if (age <= 12) {
    price = ticketPrice * 0.5;
}else if (age <= 17){
    price = ticketPrice * 0.8;
}else if (age <= 59) {
    price = ticketPrice;
}
else {
    price = ticketPrice * 0.75;
}

let studentTicket;
if (age >= 18 && age <= 25){
    while (studentTicket !== 1 && studentTicket !== 2) {
        studentTicket = +prompt("У вас є студентський квиток?\n" +
            "1 - Так\n" +
            "2 - Ні");
        if (studentTicket !== 1 && studentTicket !== 2) {
            alert("Виберіть так або ні (1 або 2)")
        }
    }
    if (studentTicket === 1){
        price = price * 0.9;
    }
    total += price;
    console.log(`Ціна квитка: ${price.toFixed(2)} грн`);
}

// if (price === 0){
//     processedTickets++;
//     freeTickets++;
//     continue;
//}

let endPrice = total;
if (total > 1000){
    endPrice = total * 0.95;
}

console.log(`Оброблено квитків: ${processedTickets}`);
console.log(`Безкоштовних квитків: ${freeTickets}`);
console.log(`Квитків зі знижкою: ${discountTickets}`);
console.log(`Квитків за повною ціною: ${fullPriceTickets}`);
console.log(`Загальна сума: ${endPrice}`)