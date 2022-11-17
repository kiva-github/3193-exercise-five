const express = require("express");
const router = express.Router();

// firebase
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

const createPostForm = `
<h1>Create Post</h1>
<form action="/create/submit">
    <div style="display: flex; flex-direction: column; max-width: 400px;">

        <label for="postTitle">Title</label>
        <input type="text" name="postTitle" placeholder="Title" style="margin-bottom: 40px;"/>

        <label for="postText">Text</label>
        <input type="text" name="postText" placeholder="Text" style="margin-bottom: 40px;"/>

        <label for="postAuthor">Author</label>
        <input type="text" name="postAuthor" placeholder="Author" style="margin-bottom: 40px;"/>

        <button type="submit">Submit</button>
    </div>
</form>
`;

router.use((_, __, next) => {
    next();
});

router.get("/", (req, res) => {
    res.send(createPostForm);
});

router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.postTitle;
    const text = queryParams.postText;
    const author = queryParams.postAuthor;
    const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();
    
    const setPost = firestore.setDoc(
        firestore.doc(db, "posts", idFromTitle),
        {
            title,
            text,
            author
        }
    );

    setPost
        .then(() => {
            res.send(`
            <h1>Submission successful!</h1>
            <p><a href="/create">Add another post</a></p>
            <p><a href="/">Return home</a></p>
            `);
        })
        .catch((error) => {
            console.warn(error);
            res.send(`Error submitting: ${error.toString()}`);
        })
});

module.exports = router;