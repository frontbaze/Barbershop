const link = document.querySelector(".login-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = popup.querySelector("[name = login]");
const password = popup.querySelector("[name = password]");
const form = popup.querySelector("form");
const storage = localStorage.getItem("login");
let isStorageSupport = true;

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    try {
        if (storage) {
            login.value = storage;
        }
    } catch (err) {
        isStorageSupport - false;
    };

    if (storage) {
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log("Введите логин и пароль");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }
})