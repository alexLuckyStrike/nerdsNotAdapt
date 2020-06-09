let open = document.querySelector('.contacts__button');
let modal = document.querySelector(".modal");
let close = document.querySelector('.modal-close');
let name = document.querySelector('[name=name]');
let form = document.querySelector('.modal-form');
let mail = document.getElementById("mail");
let storage = "";
let isStorageSupport = true;


try {
    storage = localStorage.getItem("name");
}catch(err){
    isStorageSupport = false;
}

open.addEventListener("click",function(e){
    e.preventDefault();
    modal.classList.add('modal--open');
    if(storage){
        name.value = storage;
        mail.focus()
    }else {
        name.focus();
    }
});

close.addEventListener('click',function(e){
    e.preventDefault();
    modal.classList.remove('modal--open');
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!mail.value || !name.value ){
    console.log("mistake");
    }else{
        if(isStorageSupport){
            localStorage.setItem("name", name.value);
        }
    }
});

window.addEventListener("keydown",function(e){
    if(e.keyCode === 27){
        e.preventDefault();
        if(form.classList.contains("modal--open")){
            form.classList.remove("modal--open");
        }
    }
});
