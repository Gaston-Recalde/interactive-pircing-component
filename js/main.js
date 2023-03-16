// const toggle = document.querySelector('.toggle');
// const toggleBtn = document.querySelector('.toggle-btn');
// const monthYear = document.querySelector('.card__price');
// const price = document.querySelector('.price');

// toggle.addEventListener('click', () => {
//     if(!toggleBtn.classList.contains('toggle-btn-active')){
//         toggleBtn.classList.add('toggle-btn-active');
//         monthYear.innerHTML = ' / year';
//         price.innerHTML = '$144.00';
//     } else {
//         toggleBtn.classList.remove('toggle-btn-active');
//         monthYear.innerHTML = ' / month';
//         price.innerHTML = '$16.00';
//     }
// });

const inputRange = document.querySelector('.slider') 
const price = document.querySelector('.price');
const toggle = document.querySelector('.toggle');
const toggleCircule = document.querySelector('.toggle-btn');
let toggleoff = true;

toggle.addEventListener('click', () => {
    toggleoff = ! toggleoff;
    toggleoff

        ? toggleCircule.classList.remove('toggle-btn-active')
        : toggleCircule.classList.add('toggle-btn-active');
});

inputRange.oninput = function () {
    if(toggleoff){
        price.innerText = this.value + '.00';
    } else {
        const discount = this.value - (0.25 * this.value);
        if(Number.isInteger(discount)){
            price.innerText = discount + '.00';
        } else {
            price.innerText = discount;
        }
    }
}