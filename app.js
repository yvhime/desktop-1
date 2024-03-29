console.log("hello vue")

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            x: 0,
            y: 0,
            books: [{
                title: "name of the wind",
                author: "patrick rothfuss",
                img: "assets/Ember_Spirit_icon.png",
                isFav: true
            }, {
                title: "the way of the kings",
                author: "Brandon Sanderson",
                img: "assets/Faceless_Void_icon.png",
                isFav: false
            }, {
                title: "The Final Empire",
                author: "Brandon Sanderson",
                img: "assets/Naga_Siren_icon.png",
                isFav: true
            },],
            url: "www.youtube.com"
        } // can only be accessed inside the div with id app
    },

    methods: {
        changeTitle(title) {
            // console.log("you clicked me")
            // this.title = 'More and more' // title will be changed to this.title
            this.title = title // value is from parameter
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        handleEvent(e, data) { // two params from @mouseover
            console.log(e, e.type)
            if(data) {
                console.log(data); // will be logged if data has value
            }
        },

        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toggleFav(book) { // param from :class="{ fav: book.isFav}"
            book.isFav = !book.isFav // if book is true for example it will reverse it to false using !
                                     // and assign it to book.isFav
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav) // to filter book if true it will be shown
                                                           // else it will be deleted
        }
    }
})

app.mount('#app') // parameter inside is calling div with id app on index.html, will be mounted to const app