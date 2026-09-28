// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
//
// console.log(Number("Hello"));

// let age = +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 || age >= 120) {
//     alert("Please enter your age");
//     age  = +prompt('Enter your age');
// }
// console.log(age);

// const correctPin = 1111;

// let pin = +prompt("Enter a valid pin");
// let tries = 1;

// while (pin !== correctPin && tries <= 3) {
//     pin = +prompt("Enter a valid pin");
//     tries ++;
// }
// if (pin === correctPin) {
//     alert("Доступ дозволено");
// }
// else {
//     console.log("Картку заблоковано");
// }

// while (tries <= 3) {
//     let pin = +prompt("Enter a valid pin");
//     if (pin === correctPin) {
//         console.log("Вхід дозволено");
//         break;
//     }
//     tries++;
//     console.log("Неправильний пароль");
// }


// let menuChoice;
// do{
//     menuChoice = prompt("Оберіть дію:\n" +
//         "1 - відкрити профіль\n" +
//         "2 - Налаштування профілю\n" +
//         "0 - Вихід")
//     if(menuChoice === 1){
//         console.log("Відкриваємо профіль")
//     }
//     else if(menuChoice === 2){
//         console.log("Налаштовуємо профіль")
//     }
//     else if(menuChoice === 0){
//         console.log("Вихід")
//     }
//     else {
//         console.log("Не зрозуміла команда")
//     }
//
// }while (menuChoice !== 0)


// let count = 0;
// let sum = 0;
// while (count < 5){
//     let num;
//     num = +prompt("Enter the grade");
//     if (Number.isNaN(num) || num <= 0 || num > 12) {
//         alert("Invalid grade");
//         continue;
//     }
//     sum += num;
//     count++;
// }
// alert('Average grade is $(sum / 5)')

//__________________________________________________________________________

let age = +prompt('Введіть свій вік: ');
while (Number.isNaN(age) || age <12 || age > 90) {
    alert("Введіть свій вік");
    age = +prompt('Введіть свій вік: ');
}

const correctPin = 4321;

let pin = +prompt("Введіть PIN: ")
let attempts = 1;

while (pin !== correctPin && attempts <= 3) {
    pin = +prompt("Введіть правильний PIN:");
    attempts++;
}
if (pin === correctPin) {
    alert("Доступ дозволено")
    let menuChoice;
    do {
        menuChoice = +prompt("Оберіть дію:\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід")
        if (menuChoice === 1) {
            console.log("Входимо в особистий кабінет...")
        }
        else if (menuChoice === 2) {
            console.log("Перевіряємо на наявність нових повідомлень...")
        }
        else if (menuChoice === 3) {
            console.log("Налаштовуємо все...")
        }
        else if (menuChoice === 0) {
            console.log("Вихід")
        }
        else {
            alert("Такого пункту немає")
        }

    }while (menuChoice !== 0);
}else {
    alert("Неправильний PIN, доступ заблоковано")
}

