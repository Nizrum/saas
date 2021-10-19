const plansButtons = document.querySelectorAll(".plans__button");
const planPrice1 = document.querySelector(".plan__price_1");
const planPrice2 = document.querySelector(".plan__price_2");

plansButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        plansButtons.forEach(function (button) {
            button.classList.remove('active');
        });
        item.classList.add('active');
        if (item.value == "monthly") {
            planPrice1.innerHTML = "$36<span>/month</span>";
            planPrice2.innerHTML = "$60<span>/month</span>";
        } else {
            planPrice1.innerHTML = "$29<span>/month</span>";
            planPrice2.innerHTML = "$49<span>/month</span>";
        }
    })
});