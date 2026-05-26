const express = require('express');
const cors = require('cors');

const app = express();
// Use the port provided by your hosting provider, or default to 5000 locally
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());          // Allows your frontend to make requests to this backend
app.use(express.json());  // Allows the server to parse incoming JSON data

// --- Routes / Endpoints ---

// 1. Health check / Welcome route (GET request)
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the backend API! It's running smoothly." });
});

// 2. An example data route (GET request)
app.get('/api/data', (req, res) => {
    const sampleData = [
        { id: 1, name: "Project Item Alpha", status: "Active" },
        { id: 2, name: "Project Item Beta", status: "Pending" }
    ];
    res.json(sampleData);
});

// 3. An example route to receive data from frontend (POST request)
app.post('/api/message', (req, res) => {
    const userMessage = req.body.message;
    
    if (!userMessage) {
        return res.status(400).json({ error: "No message provided in request body." });
    }

    res.json({ 
        message: "Data received successfully!", 
        youSent: userMessage 
    });
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is blasting off on port ${PORT}`);
});
