import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAZEaCkIgE-DbVtF0E0F3wNXtXFuZntgSk",
    authDomain: "petshop02-6cf0f.firebaseapp.com",
    databaseURL: "https://petshop02-6cf0f.firebaseio.com",
    projectId: "petshop02-6cf0f",
    storageBucket: "petshop02-6cf0f.appspot.com",
    messagingSenderId: "756683865125",
    appId: "1:756683865125:web:cd88562708fdfd50fd93cc",
    measurementId: "G-PE86EDDQ9K"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.analytics();