const express = require('express');
const app = express();

app.use(express.json());

const searches = [
    {id: 1,
     title: "link1",
     description: "this is the firts link",
     link: "http://link1.com" 
    },

    {id: 2,
     title: "link2",
     description: "this is the second link",
     link: "http://link2.com" 
    },

    {id: 3,
     title: "link3",
     description: "this is the third link",
     link: "http://link3.com" 
    },

    {id: 4,
     title: "link4",
     description: "this is the fourth link",
     link: "http://link4.com" 
    },
]
//route to see all the searches
app.get('/searches', (req, res) => {
    res.send(searches);
})

//view specific search
app.get('/searches/:id', (req, res) => {
    const search = searches.find(c => c.id === parseInt(req.params.id));
    if(!search) return res.status(404).send('No search found retry');
    res.send(search);
})

//adding a new search
app.post('/searches', (req, res) => {
    const newSearch = {
        id: searches.length + 1,
        title: req.body.title,
        description: req.body.description,
        link: req.body.link
    };

    searches.push(newSearch);
    res.send(newSearch);
});

//

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Myseaches app has started on ${PORT}!!!`);
});