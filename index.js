const express = require('express');
const app = express();

const searches = [
    {title: "link1",
     description: "this is the firts link",
     link: "http://link1.com" 
    },

    {title: "link2",
    description: "this is the second link",
    link: "http://link2.com" 
    },

    {title: "link3",
    description: "this is the third link",
    link: "http://link3.com" 
    },

    {title: "link4",
    description: "this is the fourth link",
    link: "http://link4.com" 
    },
]
//route to see all the searches
app.get('/searches', (req, res) => {
    res.send(searches);
})

//

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Myseaches app has started on ${PORT}!!!`);
});