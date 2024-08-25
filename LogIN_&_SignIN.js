        let  signin = document.querySelector(".signin");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signin.addEventListener("click", () => {
slider.classList.remove("moveslider");
formSection.classList.remove("form-section-move");
});

login.addEventListener("click", () => {
slider.classList.add("moveslider");
formSection.classList.add("form-section-move");
});