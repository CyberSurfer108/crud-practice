const express = require('express');
const path = require('path');
const { fetchAllItems } = require('./database');

const app = express();
const PORT = 3000;

// Serve static files (like HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch all items
app.get('/items', async (req, res) => {
    try {
        const data = await fetchAllItems(); // Get items from the database
        res.json(data);  // Send the items as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items', message: error.message });
    }
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

