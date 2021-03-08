// css class is denoted with . eg .error
// querySelector single selector
// querySelectorAll multiple selector
// id should be unique on an html page
const para = document.querySelector("div.error"); // css selector // p tag // goes top to bottom and grabs the first tag

console.log(para);

const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error"); just had to comment this line
// console.log(errors); just had to comment this line

// =========================================================
const title = document.getElementById("page-title");
console.log(title);

const errors = document.getElementsByClassName("error");
console.log(errors); 

// =========================================================
const parasTag = document.getElementsByTagName("p");
console.log(parasTag);

// =========================================================
const para1 = document.querySelector("p");
console.log(para1.innerText); // gets the inner text of the element
para1.innerText = "ninjas are awesome"; // replaces the first p of index3.html

// =========================================================
const para2 = document.querySelectorAll("p"); // gets all the p tag
para2.forEach(function(paraValue) { // loops all the p tag / paraValue is the param
    console.log("query selector all p " + paraValue.innerText); // shows it to the console // only shows the text value
    paraValue.innerText += " new text"; // appends this value to all p tag
});

// =========================================================
const content = document.querySelector(".content");
console.log(content.innerHTML);
content.innerHTML += "<h2>THE NEW CONTENT</h2>";

const people = ["nayeon", "momo", "jihyo"];
people.forEach(function(person) {
    content.innerHTML += "bias" + person + "<br>"; // .innerHTML includes the html attributes
});

// =========================================================
const link = document.querySelector("a"); // a tag from index3.html
console.log(link.getAttribute("href")); // .getAttribute is a method // parameter href is the value to be retrieved
const changeLink = link.setAttribute("href", "https://www.w3schools.com");
link.innerText = "w3";