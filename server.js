// Import required modules
const express = require('express');     // Express framework
const bodyParser = require('body-parser');  // Middleware to parse form data
const path = require('path');           // Helps in resolving file paths

// Initialize an Express app
const app = express();

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data (from POST requests)
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission (from the 'Join the Team' form)
app.post('/submit_application', (req, res) => {
    const { name, email, message } = req.body; // Extract form data

    // For now, log the form data to the console
    console.log(`New Application from ${name} - Email: ${email} - Message: ${message}`);

    // Send a response back to the client (browser) after form submission
    res.send('Application submitted successfully!');
});

// Set the port the server will listen on (3000 by default)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
