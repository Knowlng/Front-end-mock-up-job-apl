"use strict";


function menuActive() {
    if (document.URL.includes("services.html")) {
        
        let menu = document.querySelector(".menu-item2");
        menu.classList.remove('opacity-50');
        menu.classList.toggle("special");
       
    }
    
}

window.onload = menuActive;