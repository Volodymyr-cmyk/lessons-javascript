let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput");
let addButton = document.querySelector("#addButton");
let clearButton = document.querySelector("#clearButton");
let errorMessage = document.querySelector("#errorMessage");
let totalCounter = document.querySelector("#totalCounter");
let confirmedCounter = document.querySelector("#confirmedCounter");
let emptyMessage = document.querySelector("#emptyMessage");
let requestList = document.querySelector("#requestList");

function updateStats() {
    let cards = requestList.querySelectorAll(".card");
    let confirmed = requestList.querySelectorAll(".card.confirmed");
    totalCounter.textContent = cards.length;
    confirmedCounter.textContent = confirmed.length;
    emptyMessage.classList.toggle("hidden", cards.length > 0);
}

function addRequest() {
    let name = nameInput.value.trim();
    let eventName = eventInput.value.trim();

    if (name === "" || eventName === "") {
        errorMessage.textContent = "Заповніть обидва поля: ім’я учасника та назву події";
        return;
    }
    errorMessage.textContent = "";

    let li = document.createElement("li");
    li.classList.add("card");

    let info = document.createElement("div");
    info.classList.add("info");

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("participant");
    nameSpan.textContent = name;

    let eventSpan = document.createElement("span");
    eventSpan.classList.add("event");
    eventSpan.textContent = eventName;

    info.append(nameSpan, eventSpan);

    let status = document.createElement("span");
    status.classList.add("status");
    status.textContent = "Очікує";

    let confirmButton = document.createElement("button");
    confirmButton.classList.add("confirm-btn");
    confirmButton.textContent = "Підтвердити";

    confirmButton.addEventListener("click", () => {
        li.classList.toggle("confirmed");
        if (li.classList.contains("confirmed")) {
            status.textContent = "Підтверджено";
        } else {
            status.textContent = "Очікує";
        }
        updateStats();
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Видалити";

    deleteButton.addEventListener("click", () => {
        li.remove();
        updateStats();
    });

    li.append(info, status, confirmButton, deleteButton);
    requestList.append(li);

    nameInput.value = "";
    eventInput.value = "";
    nameInput.focus();
    updateStats();
}

function clearAll() {
    if (requestList.children.length === 0) {
        return;
    }
    let answer = confirm("Видалити всі заявки?");
    if (answer) {
        requestList.innerHTML = "";
        updateStats();
    }
}

addButton.addEventListener("click", addRequest);
clearButton.addEventListener("click", clearAll);
[nameInput, eventInput].forEach((input) => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") addRequest();
    });
    input.addEventListener("input", () => {
        errorMessage.textContent = "";
    });
});

updateStats();
