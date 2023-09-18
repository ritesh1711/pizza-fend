const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://ritesh098765:Ritesh1711@cluster0.nzfc00z.mongodb.net/pizza21"

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected successfully');
});

db.on('error', (err) => {
    console.error('Connection failed:', err);
});

module.exports = mongoose;
