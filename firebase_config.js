const Rebase = require('re-base')
const firebase = require('firebase')

const Firebaseconfig = {
        apiKey: "AIzaSyDZxxcWAUBLVSAjPzsbApip8IciBqZQEbs",
        authDomain: "projetoreactgabriel.firebaseapp.com",
        databaseURL: "https://projetoreactgabriel.firebaseio.com",
        projectId: "projetoreactgabriel",
        storageBucket: "projetoreactgabriel.appspot.com",
        messagingSenderId: "690829710395"
    };
  
const app =   firebase.initializeApp(Firebaseconfig)
const config = Rebase.createClass(app.database())

export const auth = app.auth()
export default config