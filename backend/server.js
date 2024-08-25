require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 3000;

const uri = 'mongodb+srv://jonathankabango08:MONGODBSUCKS@cluster0.hyemgyx.mongodb.net/Stationery-server'

app.use(express.json());
app.use(cors());
let client, db;

// Function to connect to MongoDB
async function connectToMongo() {
    try {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db("Infostructure"); // Database name
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB:', error.message);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
}

app.listen(PORT, async () => {
    await connectToMongo();
    console.log(`Server is running on port ${PORT}`);
});