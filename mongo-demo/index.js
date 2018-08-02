const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Successfully connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

//mysearches schema
const searchSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
    tags: String,
    date: {type: Date, default: Date.now}
});