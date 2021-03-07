const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class")); // get attribute of the html // get attribute class of mssg
mssg.setAttribute("class", "success"); // set the attribute to success // 2nd param is the changed value
mssg.setAttribute("style", "color: green;");

const headTitle = document.querySelector("h1");

console.log(headTitle.style); // previews all css style
console.log(headTitle.style.color + " color");
headTitle.style.margin = "50px"; // .margin is the style i want to add
headTitle.style.fontSize = "50px"; // use camelcase cause hyphen is not allowed
// always check the .style to check the css properties
// headTitle.style.margin = ""; removes the margin if value is empty
console.log(headTitle); // 50px margin appeared and applied to html document