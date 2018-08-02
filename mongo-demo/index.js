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

async function createSearch() {
     //compile into a model
     const Search = mongoose.model('Search', searchSchema);
     const search = new Search ({
         title: 'about node',
         description: 'best ressource to learn node',
         link: 'http://link2.com',
         tags: ['node', 'backend', 'javascript']
     });
 
     //save to Database
     const result = await search.save();
     console.log(result);   
}

createSearch();
