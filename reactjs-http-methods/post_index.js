import express from 'express'; // Replacing 'require' with 'import'

const app = express();
const PORT = 5000;

import cors from 'cors';
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle POST requests to /api/sign_in
app.post('/api/sign_in', (req, res) => {
  const userData = req.body;

  if (userData && userData.name && userData.email) {
    res.status(201).json({
      message: 'User created successfully!',
      user: userData, // Send back the user data as a response
    });
  } else {
    res.status(400).json({
      message: 'Invalid user data received!',
    });
  }
});

// Default route to handle other requests
app.use((req, res) => {
  res.status(404).send('API endpoint not found!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
