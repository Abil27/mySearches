const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello mySearches');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Myseaches app has started on ${PORT}!!!`);
});