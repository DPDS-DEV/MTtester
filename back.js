const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Log test results
app.post('/log', (req, res) => {
    const data = req.body;
    fs.appendFile('logs.txt', JSON.stringify(data) + '\n', (err) => {
        if (err) return res.status(500).send('Error logging data');
        res.send('Data logged successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
