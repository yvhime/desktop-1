const ul = document.querySelector('.people'); // selects class people from index2.html
const people = ["Brimstone", "Jett", "Sova", "Reyna", "Raze"];
let html = "";

people.forEach(function(person) {
    html += '<li style = "color: purple">' + person + '</li>'; // html template for index2.html
});

console.log(html);
ul.innerHTML = html; // gets html to be placed on ul using innerHTML

let user = {
    name: "crystal", // key:value pair == 1 property
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    login: function() { // login is the name of the method // still key:value pair
        console.log("the user logged in");
    },
    logout: function() {
        console.log("the user logged out");
    },
    logBlogs: function() {
        
    }
};

console.log(user);
console.log(user.name); // dot notation to check specific data
// user.age = 35;          // to overwrite
// console.log(user.age);  // to overwrite
console.log(user['name']); // using brackets
user.login();
user.logout();