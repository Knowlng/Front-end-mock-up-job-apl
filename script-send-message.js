"use strict";

function submitMessage() {
    if(document.querySelector(".submit-div").classList.contains("d-none")) {
        document.querySelector(".message-div").classList.add("d-none");
        document.querySelector(".submit-div").classList.remove("d-none");
    } else {
        document.querySelector(".message-div").classList.remove("d-none");
        document.querySelector(".submit-div").classList.add("d-none");
    }
}

document.querySelector(".submit").addEventListener("click", submitMessage);
document.querySelector(".new-message").addEventListener("click", submitMessage);