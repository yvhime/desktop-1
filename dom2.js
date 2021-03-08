const content = document.querySelector("p");
console.log(content.classList); // classList is a property // gets a list of all the different classes
content.classList.add("allami"); // .add is a method to add something to content.classList in this case
content.classList.add("ullyeodae"); // .add is a method to add something to content.classList in this case

const paras = document.querySelectorAll("p");
paras.forEach(function(p) {
    console.log(p.textContent); // textContent shows all text even if its hidden
    if(p.textContent.includes("error")) {
        p.classList.add("error");
    } // includes is a method to check
    else if(p.textContent.includes("success")) {
        p.classList.add("success");
    }
});

const title = document.querySelector(".title");
title.classList.toggle("test"); // to toggle // in this case it adds test to title