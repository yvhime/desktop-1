console.log("hello vue")

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        } // can only be accessed inside the div with id app
    },

    methods: {
        changeTitle(title) {
            // console.log("you clicked me")
            // this.title = 'More and more' // title will be changed to this.title
            this.title = title // value is from parameter
        }
    }
})

app.mount('#app') // parameter inside is calling div with id app on index.html, will be mounted to const app