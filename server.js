const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// User credentials
const username = "AnsumanBehera";
const password = "Anshu2024";

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Handle login
app.post('/login', (req, res) => {
    const { user, pass } = req.body;
    if (user === username && pass === "Ansucam") {
        res.redirect('/stream');
    } else {
        res.send('Invalid credentials. <a href="/">Try again</a>');
    }
});

// Stream route
app.get('/stream', (req, res) => {
    res.sendFile(__dirname + '/public/stream.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
