
let range = document.querySelector('.runer');
let area = document.querySelector('.aside-form__text--area');
let number = 15000;

(function(){
    area.textContent= number;
}());

range.oninput = function(){
        area.textContent = range.value;
    };


