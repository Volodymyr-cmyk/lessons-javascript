// if (умова){
//     дії;
// }
// else if (){
//
// }
// true
// 1

// false
// 0
// 0n
// "" ''
// null
// undefined
// NaN

// let a = 10, b = 12;
// console.log(a == b); //нестрога рівність
// console.log(a === b); //строга
// console.log(a != b); //нестрога нерівність
// console.log(b !== b); //строга
// > < >= <=


// let a = +prompt("Введи число: ");
// let b = +prompt("Введи число: ");
// let c;

// if (a > b) {
//     c = "a > b"
// }else if(a < b){
//     c = "a < b"
// }
// else {
//     c = "a == b"
// }
// alert(c);

// if (a > b) c = "a > b";
// else if (a < b) c = "a < b";
// else c = "a == b";

// let course = prompt("What is the name of course?"), tittle;
// switch (course) {
//     case "figma":
//         tittle = 'Figma';
//         break;
//
//     case "WEB":
//     case "HTML":
//     case "CSS":
//         tittle = 'HTML + CSS';
//         break;
//
//     case "Javascript":
//         tittle = 'JavaScript основи програмування';
//         break;
//
//     default:
//         tittle = 'курсів не знайдено';
// }
// alert(tittle);


//__________________________________________-

// let a = prompt("Назва товару: ");
// let b = +prompt("Кількість товару: ");
// let с = +prompt("Вартість товару: ");
// let d;
//
// if (c > 5000){
//     d = 'c * 0.9';
// }
// else d = "c = d";

//________________________________________________

// let dostavka = ('Яка доставка?'), tittle;
// switch (dostavka) {
//     case "Кур'єр:
//         tittle = "200 uah";
//         break;
//
//     case "Пошта":
//         tittle = "100 uah"
//         break;
//
//     case "Самовивіз":
//         tittle = "0 uah";
//         break;
//
//     default:
//         tittle = "Доставку не знайдено";
// }
// alert(tittle);

//_______________________________________________________

let a = true;
console.log(!a);

let a = 10, b = 12, c =5;
if (a > b && b > c) {
    console.log(a);
}else if (b > a || a > c){}
