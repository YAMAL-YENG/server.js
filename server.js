const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Route to handle ?number=...
app.get('/', (req, res) => {
  const number = req.query.number;

  // Validate number
  if (!number || !/^\d{10,15}$/.test(number)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  // Generate AIMS code
  const code = 'AIMS-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  return res.json({ code });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
