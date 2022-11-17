// imports/requires
const express = require("express");
const firebase = require("firebase/app");
const firestore = require("firebase/firestore");

const app = express();
const port = process.env.PORT || 4000;

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCYUi44ZsMprfdTeeAvE8U6qKtai5n1rBI",
  authDomain: "exercise-5-f22.firebaseapp.com",
  projectId: "exercise-5-f22",
  storageBucket: "exercise-5-f22.appspot.com",
  messagingSenderId: "540651686742",
  appId: "1:540651686742:web:2e50c661a30f10156fa4f7"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// routes
const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');

app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})