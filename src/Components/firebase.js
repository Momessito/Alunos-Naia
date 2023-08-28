// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfIf1w0Q3gktYB1zoni-4h3VWi36xv7HY",
    authDomain: "alunos-naia.firebaseapp.com",
    projectId: "alunos-naia",
    storageBucket: "alunos-naia.appspot.com",
    messagingSenderId: "328791671849",
    appId: "1:328791671849:web:3f4c5f22ba946963a0c838",
    measurementId: "G-NN8WCGV549"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
export const auth = app.auth();
