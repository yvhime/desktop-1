const ul = document.querySelector('.people'); // selects class people from index2.html
const people = ["Brimstone", "Jett", "Sova", "Reyna", "Raze"];
let html = "";

people.forEach(function(person) {
    html += '<li style = "color: purple">' + person + '</li>'; // html template for index2.html
});

console.log(html);
ul.innerHTML = html; // gets html to be placed on ul using innerHTML

// const blogsArray = [
//     { title: "why mac & cheese rules", likes: 30},
//     { title: "10 things to make with marmite", likes: 50}
// ]; // array blogs with objects inside

// console.log("array blogs " + blogsArray);

let user = {
    name: "crystal", // key:value pair == 1 property
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    // blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    blogs: [
        { title: "why mac & cheese rules", likes: 30},
        { title: "10 things to make with marmite", likes: 50}
    ],
    login: function() { // login is the name of the method // still key:value pair
        console.log("the user logged in");
    },
    logout: function() {
        console.log("the user logged out");
    },
    // logout() {
    //     console.log("the user logged out");
    // }, is the same as on the op
    logBlogs: function() {
        // this.blogs; // refers to user? // represents the user object
        // console.log("this keyword " + this.blogs);
        console.log("this user has written the following blogs: ");
        this.blogs.forEach(function(blog) { // callback function // blog parameter represents the object inside blogs key
            console.log(blog.title + " " + blog.likes + " " + "ARROW FUNC ON NETNINJA");
        }) // this.blogs is an array forEach is a method // 
    }
};

console.log(user);
console.log(user.name); // dot notation to check specific data
// user.age = 35;          // to overwrite
// console.log(user.age);  // to overwrite
console.log(user['name']); // using brackets
user.login();
user.logout();
user.logBlogs();
console.log(this); // global context global object window object