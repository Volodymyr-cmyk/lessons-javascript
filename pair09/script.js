// let book = {
//     title : "Кобзар",
//     author : "Тарас Шевченко",
//     price : 500,
//     available : true
// }
// // console.log(book)
// // console.log(book.title);
// // console.log(book["author"]);
// // book.price = 550;
// // console.log(book.price);
//
// for (let key in book) {
//     console.log(`${key}: ${book[key]}`);
// }

// let books = [
//     {id: 1, title : "Кобзар", author : "Тарас Шевченко", price : 500, available: true},
//     {id: 1, title : "Лісова Пісня", author : "Леся Українка", price : 600, available: false},
//     {id: 1, title : "Тигролови", author : "Іван Багряний", price : 450, available: true},
//     {id: 1, title : "Енеїда", author : "Іван Котляревський", price : 500, available: false}
// ]
// console.log(books);
// books.push({id: 5, title: "Захар Беркут", author: "Іван Франко", price : 600, available: false});

// for (let book of books) {
//     console.log(`${book.title} - ${book.author}`);
// }
// books.forEach(function(book){
//     console.log(`${book.title} - ${book.author}`);
// })

// let total = books.filter(function(book){
//     return book.available === true;
// })

// let total = books.filter(book => book.available === true);
//
// console.log(total);
//
// let foundBooks = books.find(book => book.id === 3);
// console.log(foundBooks);
//
// let searchUserBook = prompt("Введіть назву книги")
// let searchBook = books.find(book => book.title === searchUserBook);
// if (searchBook !== undefined) {
//     alert(searchBook);
// }else{
//     alert("такої книги немає")
// }

// let titles = books.map(book => book.title);
// console.log(titles);
//
// let booksSales = books.map(book => {
//     return{
//         id: book.id,
//         title: book.title,
//         author: book.author,
//         price: Math.round(book.price * 0.9),
//         available: book.available,
//     }
// });
// console.log(booksSales);

// let sortedByPrice = books.slice().sort((a, b) => a.price - b.price);
// console.log(sortedByPrice);

//______________________________________________________________________---

let games = [
    { id: 1, title: "The Witcher 3", genre: "RPG",        price: 499, rating: 10, available: true  },
    { id: 2, title: "Cyberpunk 2077", genre: "Action RPG", price: 899, rating: 8,  available: true  },
    { id: 3, title: "FIFA 24",        genre: "Sport",      price: 1299, rating: 6, available: false },
    { id: 4, title: "Minecraft",      genre: "Sandbox",    price: 599, rating: 9,  available: true  },
    { id: 5, title: "Stardew Valley", genre: "Simulation", price: 250, rating: 9,  available: true  },
    { id: 6, title: "Need for Speed", genre: "Racing",     price: 750, rating: 7,  available: false }
];

let total = games.filter(function(game){
    return games
})

console.log(total);

console.log(`Загальна кількість ігор: ${games.length}`);

let newTitle = prompt("Введіть назву гри:");
let newGenre = prompt("Введіть жанр:");
let newPrice = +(prompt("Введіть ціну:"));
let newRating = +(prompt("Введіть рейтинг:"));

games.push({id: 7, title: newTitle, genre: newGenre, price: newPrice, rating: newRating, available: true});

let lastGame = games[games.length - 1];
if (confirm("Видалити гру " + lastGame.title + "?")) {
    games.pop();
    alert("Гру видалено");
} else {
    alert("Видалення скасовано");
}

let searchUserGame = prompt("Введіть назву гри")
let searchGame = games.find(book => book.title === searchUserGame);
if (searchGame !== undefined) {
    alert(searchGame);
}else{
    alert("такої гри немає")
}

let maxPrice = +(prompt("Введіть максимальну суму:"));
let cheapGames = games.filter(function (game) {
    return game.price <= maxPrice;
});
console.log("Ігри до " + maxPrice + " грн:");
console.log(cheapGames);

let goodGames = games.filter(function (game) {
    return game.rating >= 8;
});
console.log("Ігри з рейтингом від 8:");
console.log(goodGames);

let titles = games.map(game => game.title);
console.log(titles);

let gamesSales = games.map(game => {
    return{
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: Math.round(game.price * 0.85),
        rating: game.rating,
        available: game.available,
    }
});
console.log(gamesSales);

let sortedByPrice = games.slice().sort((a, b) => a.price - b.price);
console.log(sortedByPrice);

//_______Індивідуальне_завдання___________________

const name = "Володимир";

let nameLength = name.length;

let budget = nameLength * 100;
console.log("Мій бюджет: " + budget + " грн");

const availableGames = games.filter(function (game) {
    return game.available === true;
});

let totalPrice = 0;
console.log("Доступні ігри:");
for (let game of availableGames) {
    console.log(game.title + " - " + game.price + " грн");
    totalPrice = totalPrice + game.price;
}
console.log("Загальна вартість: " + total + " грн");

if (totalPrice > budget) {
    alert("Грошей не вистачає! Вартість " + totalPrice + " грн, а бюджет " + budget + " грн");
} else {
    alert("Грошей вистачає! Залишок: " + (budget - totalPrice) + " грн");
}