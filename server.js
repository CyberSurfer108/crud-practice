// nodejs is the engine running your app on the server.
// express is the web app framework you are using. It runs on top of nodejs.
// express handles behind the scenes stuff that you don't want/need to worry about.

const express = require('express');
const path = require('path');
const { fetchAllItems } = require('./database');

// In this file you are basically just configuring the express 'app'.
const app = express();
const PORT = 3000;

// Serve static files (like HTML, CSS, JS) from the 'public' folder.
// This helps out later when you want to reference a specific file.
app.use(express.static(path.join(__dirname, 'public')));

// This configures the app to respond to a 'GET' request for '/items'.
// Endpoint to fetch all items
app.get('/items', async (req, res) => {        // async function because we don't know how long the db will take
    try {
        const data = await fetchAllItems(); // Get items from the database    // await because we don't want to return until we have the data
        res.json(data);  // Send the items as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items', message: error.message });
    }
});

// This configures the app to respond to a 'GET' request for '/'.
app.get('/', (req, res) => {
    // Respond with the 'index.html' file that is in the puplic folder
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// App is configured
// Start the server listening on given port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

