const link = document.querySelector(".login-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = popup.querySelector("[name = login]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});