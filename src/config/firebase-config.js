const rebase = require('re-base')
const firebase = require('firebase')

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAneNvHOf_YlwRu-b917zkrO3j6xr_Q09A",
    authDomain: "portfolio-curso-udemy.firebaseapp.com",
    databaseURL: "https://portfolio-curso-udemy.firebaseio.com",
    projectId: "portfolio-curso-udemy",
    storageBucket: "portfolio-curso-udemy.appspot.com",
    messagingSenderId: "976083890772"
};

const app = firebase.initializeApp(firebaseConfig);
const config = rebase.createClass(app.database());

export const storage = app.storage();
export default config