import React from "react";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuTa0MoU2o6W3Ji7GMRw05SpncZmXPFtk",
  authDomain: "todo-nodb.firebaseapp.com",
  projectId: "todo-nodb",
  storageBucket: "todo-nodb.appspot.com",
  messagingSenderId: "1077044043302",
  appId: "1:1077044043302:web:e6ffdc3c42acb0fc0e90e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
