// console.log("HELLO VUE - FROM DANIEL - THE SCRIPT IS SETUP CORRECTLY!")

const myApp = Vue.createApp({
    //Template, Data, functions

    //TEMPLATE
    //If the below is specified then that template is the current ONE
    //template: '<h2>I am the template</h2>'

    //DATA
    data(){
        return {
            title : "The Final Empire",
            author : "Brandon Sanderson",
            age : 45,
            showAliasAuthor : false,
            authorAliasName : "Joe Doe"
        }
    },
    //FUNCTION or methids
    methods: {
        addOneYear(){
            this.age++;
        },
        removeOneYear(){
            this.age--;
        },
        resetYear(){
            this.age = 45;
        },
        //Pass parameters, the name can be anything
        changeAuthor(newAuthor){
            this.author = newAuthor;
        },
        toogleShowAliasName(){
            this.showAliasAuthor = !this.showAliasAuthor;
        }
    }
});


//Where in the DOM to mount this application
myApp.mount('#app');