// imports/requires
const express = require("express");
const firebase = require("firebase/app");

const app = express()
const port = process.env.PORT || 4000

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


const indexRoute = require("./routes/index")

app.use("/", indexRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})