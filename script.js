
// bar is id for menu bar in small devices 
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close=document.getElementById('close');


// this funcion will add active class to navbar when clicked on hamberger 
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

// this function will remove the active class from navbar 
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}