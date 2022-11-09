// imports/requires
const express = require("express");
const firebase = require("firebase/app");
const firestore = require("firebase/firestore");

const app = express();
const port = process.env.PORT || 4000;

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAz97WhUMlieMkG7Gb1I1ppNgNXZ8jywXg",
  authDomain: "exercise-4-f22.firebaseapp.com",
  projectId: "exercise-4-f22",
  storageBucket: "exercise-4-f22.appspot.com",
  messagingSenderId: "977346725076",
  appId: "1:977346725076:web:111e83b859fbbcd564a741"
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