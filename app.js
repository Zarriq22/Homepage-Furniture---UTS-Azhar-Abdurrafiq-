const popup = document.querySelector(".popup");
const sub = document.querySelector(".subPopup");

const regis = document.querySelectorAll(".regis");
const close = document.querySelector(".close");
const pesan = document.querySelector(".order");
const keluar = document.querySelector(".btn");


for (let i = 0; i < regis.length; i++) {
    regis[i].addEventListener('click', function (){
        popup.classList.remove('hidden')
    });
};

close.addEventListener('click', function (){
    popup.classList.add('hidden')
});

pesan.addEventListener('click', function (){
    popup.classList.add('hidden')
    sub.classList.remove('hidden')
});

keluar.addEventListener('click', function (){
    sub.classList.add('hidden')
});