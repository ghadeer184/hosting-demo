const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const proPrice = document.querySelector(".pro-price");
const busPrice = document.querySelector(".bus-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () = {
    if(plansSwitch.checked) {
    basicPrice.innerText = "$349";
    proPrice.innerText = "$499";
    busPrice.innerText = "$799";
    planDuration.forEach(p = {
        p.innerText = "/ year"
    })
} else {
    basicPrice.innerText = "$49";
    proPrice.innerText = "$99";
    busPrice.innerText = "$149";
    planDuration.forEach(p = {
        p.innerText = " / month "
    }
})

