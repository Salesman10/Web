const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve specific files
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/style.css', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

// Keep-alive route
app.get('/health', (_, res) => {
    res.status(200).send('OK');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});