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

//compile into a model
const Search = mongoose.model('Search', searchSchema);
const search = new Search ({
    title: 'Push to different repo',
    description: 'Pushing automatically to diffenrent repo',
    link: 'http://link.com',
    tags: ['Git', 'github', 'stackoverflow']

});