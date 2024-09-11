const iconHamburguer = document.querySelector(".header-logo-img");
const iconClosed = document.querySelector(".header-logo-close");
const modal = document.querySelector(".modal");

iconHamburguer.addEventListener("click", ()=>{
        iconHamburguer.classList.toggle("active"); 
        iconClosed.classList.toggle("active");
        modal.classList.toggle("active");
});

iconClosed.addEventListener("click", ()=>{
        iconHamburguer.classList.toggle("active"); 
        iconClosed.classList.remove("active");
        modal.classList.remove("active");
})