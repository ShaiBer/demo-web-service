const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple GET endpoint
app.get('/shaib-demo/hello', (req, res) => {
    res.json({
        message: 'Hello from demo-web-service!',
        timestamp: new Date().toISOString()
    });
});

app.get('/shaib-demo/fello', (req, res) => {
    res.json({
        message: 'Fello from demo-web-service!',
        timestamp: new Date().toISOString()
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
