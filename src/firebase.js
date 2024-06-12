import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsz8nbGG0bmmJLF1JK6bI9ITLPPsS9mwE",
  authDomain: "fir-project-7d7db.firebaseapp.com",
  projectId: "fir-project-7d7db",
  storageBucket: "fir-project-7d7db.appspot.com",
  messagingSenderId: "373249154837",
  appId: "1:373249154837:web:432be5cfd8784424cf531c",
  measurementId: "G-B0DLMQQ5H6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);




// databaseURL:"https://fir-project-7d7db-default-rtdb.firebaseio.com/"