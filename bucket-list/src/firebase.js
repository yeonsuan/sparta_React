import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
   
        apiKey: "AIzaSyA4x9uxIFbVyOR310hWkP2LvPrRaXBtdZs",
        authDomain: "sparta-react-f8c01.firebaseapp.com",
        projectId: "sparta-react-f8c01",
        storageBucket: "sparta-react-f8c01.appspot.com",
        messagingSenderId: "4845608878",
        appId: "1:4845608878:web:a10fea0ae2a1f4fd7f323f",
        measurementId: "G-GDEH19HR9E"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };