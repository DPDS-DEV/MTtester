const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Log test results
app.post('/log', (req, res) => {
    const data = req.body;
    const logEntry = `${new Date().toISOString()} - ${JSON.stringify(data)}\n`;

    fs.appendFile(path.join(__dirname, '../logs/logs.txt'), logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            return res.status(500).send('Error logging data');
        }
        res.send('Data logged successfully');
    });
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});