const form = document.querySelector('form');
const feedback = document.querySelector(".feedback");
const thankyou = document.querySelector(".thankyou")
const rateSpan = document.querySelector(".card__rate__value")

form.addEventListener('submit', (e)=> {
e.preventDefault();
const rate =e.target.rating.value;
if(rate){
    rateSpan.innerHTML = rate.toString()
    feedback.classList.add("hidden")
    thankyou.classList.remove("hidden")
}else{
    alert("Please choose a rate")
}
})