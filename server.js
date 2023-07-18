const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/Mongodb');
const cors = require('cors')
const reimbursementRoutes = require('./routes/reimbursements');


dotenv.config();

// Connect to MongoDB
connectDB();


// Create Express server
const app = express();

// Middleware
app.use(cors());
app.use(express.json());



// routes
app.use('/api/reimbursements', reimbursementRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});