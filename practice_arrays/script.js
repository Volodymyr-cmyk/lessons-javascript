//________Завдання_1_________________________

let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let name = prompt("Введіть ваше ім'я:");
if (name.trim() === "") {
    alert("Введіть ваше ім'я");
    name = prompt("Введіть ваше ім'я:");
}

let day = +prompt("Введіть день вашого народження:");
if (Number.isNaN(day) || day > 31 || day < 1) {
    alert("Введіть коректне значення")
    day = +prompt("Введіть день вашого народження:");
}

let month = +prompt("Введіть місяць вашого народження:");
if (Number.isNaN(month) || month > 12 || month < 1) {
    alert("Введіть коректне значення")
    month = +prompt("Введіть місяць вашого народження:");
}

let personalNumber = (name.length + day + month) % topics.length;
alert(personalNumber);

let catalog = "Каталог вебінарів:\n";
for (let i = 0; i < topics.length; i++) {
    const status = seats[i] > 0 ? "Набір відкрито" : "Місць немає";
    catalog += `${i + 1}. ${topics[i]} — вільних місць: ${seats[i]} — ${status}\n`;
}
alert(catalog);

let minSeats = +(prompt("Введіть мінімальну кількість вільних місць:"));
while (Number.isNaN(minSeats) || minSeats < 0) {
    minSeats = +(prompt("Некоректне значення. Введіть невід'ємне число:"));
}

let filtered = `Вебінари з кількістю місць не менше ${minSeats}:\n`;
let found = false;
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= minSeats) {
        const status = seats[i] > 0 ? "Набір відкрито" : "Місць немає";
        filtered += `${i + 1}. ${topics[i]} — вільних місць: ${seats[i]} — ${status}`;
        found = true;
    }
}

if (found) {
    alert(filtered);
} else {
    alert("Вебінарів з такою кількістю вільних місць не знайдено.");
}

//____________Завдання_2________________________________

let vebinar = prompt("Введіть назву вебінару:");

if (vebinar.trim() === "") {
    alert("Пошук скасовано");
} else {
    let index = -1;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === vebinar) {
            index = i;
        }
    }
    if (index === -1) {
        alert("Невідома назва вебінару");
    } else if (seats[index] === 0) {
        alert("На цей вебінар місць немає");
    } else {
        let agree = confirm("Записати вас на вебінар " + topics[index] + "?");
        if (agree) {
            seats[index] = seats[index] - 1;
            alert("Ви записані! Залишилось місць: " + seats[index]);
        } else {
            alert("Запис скасовано");
        }
    }
}

//_______________________Завдання_3________________________________

let participants = [];
participants.push(name);

for (let i = 0; i < 4; i++) {
    let person = prompt("Введіть ім'я учасника №" + (i + 2) + ":");

    while (person === "") {
        person = prompt("Ім'я не може бути порожнім. Введіть ще раз:");
    }

    if (person.trim() === "") {
        alert("Введення завершено");
        break;
    }

    participants.push(person);
}

let listText = "";
for (let i = 0; i < participants.length; i++) {
    listText = listText + (i + 1) + ". " + participants[i] + "\n";
}
alert("Список учасників:" + listText);
let longer = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > name.length) {
        longer = longer + 1;
    }
}
alert("Мій поріг (довжина мого імені): " + name.length + "\nІмен довших за поріг: " + longer);

let change = confirm("Бажаєте змінити ім'я учасника?");

if (change) {
    let number = +(prompt("Введіть номер учасника (від 1 до " + participants.length + "):"));

    if (number < 1 || number > participants.length) {
        alert("Такого номера немає");
    } else {
        let newName = prompt("Введіть нове ім'я:");

        while (newName === "") {
            newName = prompt("Ім'я не може бути порожнім. Введіть ще раз:");
        }

        if (newName.trim() === "") {
            alert("Зміну скасовано");
        } else {
            participants[number - 1] = newName;

            let newList = "";
            for (let i = 0; i < participants.length; i++) {
                newList = newList + (i + 1) + ". " + participants[i] + "\n";
            }
            alert("Оновлений список:" + newList);
        }
    }
}

//_________________________Завдання_4_______________________

let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (day + month) % 7;

let personalVisits = [];
for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values){
    let sum = 0;
    let max = values[0];
    let min = values[0];

    for (let i = 0; i < values.length; i++) {
        sum += values[i];
        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    }

    let average = sum / values.length;
    return [sum, average, max, min];
}

let stats = getVisitStats(personalVisits);

let threshold = +(prompt("Введіть поріг відвідуваності:"));
while (isNaN(threshold) || threshold < 0) {
    threshold = +(prompt("Некоректний поріг. Введіть невід'ємне число:"));
}

let count = 0;
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= threshold) {
        count = count + 1;
    }
}

alert(
    "Бонус: " + bonus + "\n" +
    "Сума: " + stats[0] + "\n" +
    "Середнє: " + stats[1] + "\n" +
    "Максимум: " + stats[2] + "\n" +
    "Мінімум: " + stats[3] + "\n" +
    "Значень не менших за поріг " + threshold + ": " + count
);

let show = confirm("Показати номери вебінарів, які досягли порогу?");

if (show) {
    let numbers = "";
    for (let i = 0; i < personalVisits.length; i++) {
        if (personalVisits[i] >= threshold) {
            numbers = numbers + (i + 1) + " ";
        }
    }

    if (numbers === "") {
        alert("Жоден вебінар не досяг порогу");
    } else {
        alert("Номери вебінарів, що досягли порогу: " + numbers);
    }
}

//_______________________Завдання_5___________________________________-

function showTopics() {
    if (topics.length === 0) {
        alert("Список вебінарів порожній");
        return;
    }
    let text = "";
    for (let i = 0; i < topics.length; i++) {
        text = text + (i + 1) + ". " + topics[i] + " — місць: " + seats[i] + "\n";
    }
    alert("Вебінари:\n" + text);
}

function findTopic(title) {
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === title) {
            return i;
        }
    }
    return -1;
}

let choice;
do {
    choice = +(prompt(
        "Меню:\n" +
        "1 - показати вебінари\n" +
        "2 - додати вебінар\n" +
        "3 - перейменувати за номером\n" +
        "4 - знайти вебінар\n" +
        "5 - видалити останній вебінар\n" +
        "0 - вихід"
    ));
    switch (choice) {
        case 1:
            showTopics();
            break;

        case 2:
            let newTitle = prompt("Введіть назву нового вебінару:");
            if (newTitle.trim() === "") {
                alert("Назва не може бути порожньою");
            } else {
                let newSeats = Number(prompt("Введіть кількість місць:"));
                if (isNaN(newSeats) || newSeats < 0) {
                    alert("Некоректна кількість місць");
                } else {
                    topics.push(newTitle);
                    seats.push(newSeats);
                    alert("Вебінар додано");
                }
            }
            break;

        case 3:
            let number = +(prompt("Введіть номер вебінару (від 1 до " + topics.length + "):"));
            if (isNaN(number) || number < 1 || number > topics.length) {
                alert("Такого номера немає");
            } else {
                let renamed = prompt("Введіть нову назву:");
                if (renamed.trim() === "") {
                    alert("Назва не може бути порожньою");
                } else {
                    topics[number - 1] = renamed;
                    alert("Вебінар перейменовано");
                }
            }
            break;

        case 4:
            let searchTitle = prompt("Введіть назву для пошуку:");
            let found = findTopic(searchTitle);
            if (found === -1) {
                alert("Вебінар не знайдено");
            } else {
                alert("Знайдено: " + (found + 1) + ". " + topics[found] + ", місць: " + seats[found]);
            }
            break;

        case 5:
            if (topics.length === 0) {
                alert("Немає що видаляти");
            } else {
                let del = confirm("Видалити вебінар " + topics[topics.length - 1] + "?");
                if (del) {
                    topics.pop();
                    seats.pop();
                    alert("Останній вебінар видалено");
                } else {
                    alert("Видалення скасовано");
                }
            }
            break;

        case 0:
            let exit = confirm("Ви справді хочете вийти?");
            if (exit) {
                alert("До побачення!");
            } else {
                choice = -1;
            }
            break;

        default:
            alert("Невірний пункт меню");
    }
} while (choice !== 0);

//___________Завдання_6___________________________________

let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];

let personalScore = (day * month + name.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        } else if (scores[i] >= 50) {
            medium.push(scores[i]);
        } else {
            low.push(scores[i]);
        }
    }

    return [high, medium, low];
}

let again = true;
while (again) {
    let text = prompt("Введіть новий бал (від 0 до 100):");

    if (text === null) {
        alert("Додавання скасовано");
        break;
    }

    let newScore = +(text);
    if (text === "" || isNaN(newScore) || newScore < 0 || newScore > 100) {
        alert("Некоректний бал, його не додано");
    } else {
        requestScores.push(newScore);
        alert("Бал " + newScore + " додано");
    }

    again = confirm("Продовжити додавати бали?");
}

let groups = distributeRequests(requestScores);
let groupNames = ["Високі", "Середні", "Низькі"];

function groupText(groupName, arr) {
    let sum = 0;
    let list = "";
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        list = list + arr[i] + " ";
    }

    let avg = "немає";
    if (arr.length > 0) {
        avg = sum / arr.length;
    }

    return groupName + ": " + list + "\n" +
        "Кількість: " + arr.length + ", середній бал: " + avg + "\n";
}

let report = "";
for (let i = 0; i < groups.length; i++) {
    report = report + groupText(groupNames[i], groups[i]) + "\n";
}
alert(report);

let maxLength = groups[0].length;
for (let i = 1; i < groups.length; i++) {
    if (groups[i].length > maxLength) {
        maxLength = groups[i].length;
    }
}

let biggest = "";
for (let i = 0; i < groups.length; i++) {
    if (groups[i].length === maxLength) {
        biggest = biggest + groupNames[i] + " ";
    }
}
alert("Найбільша група: " + biggest);

let myGroup = "";
if (personalScore >= 85) {
    myGroup = groupNames[0];
} else if (personalScore >= 50) {
    myGroup = groupNames[1];
} else {
    myGroup = groupNames[2];
}
alert("Ваш персональний бал: " + personalScore + "\nГрупа: " + myGroup);