const mobileBtn = document.getElementById("mobileBtn");
const nav = document.getElementById("nav");

mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow =
        "0 2px 20px rgba(0,0,0,.08)";
    }

});
