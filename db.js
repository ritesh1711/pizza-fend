const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURL = "mongodb+srv://ritesh098765:Ritesh1711@cluster0.nzfc00z.mongodb.net/pizza21";

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Event handler for successful connection
db.on('connected', () => {
    console.log('Connected to MongoDB successfully');
});

// Event handler for connection error
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
