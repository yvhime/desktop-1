const ul = document.querySelector('.people'); // selects class people from index2.html
const people = ["Brimstone", "Jett", "Sova", "Reyna", "Raze"];
let html = "";

people.forEach(function(person) {
    html += '<li style = "color: purple">' + person + '</li>'; // html template for index2.html
});

console.log(html);
ul.innerHTML = html; // gets html to be placed on ul using innerHTML