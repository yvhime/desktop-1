console.log("hello vue")

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
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
        }
    }
})

app.mount('#app') // parameter inside is calling div with id app on index.html, will be mounted to const app