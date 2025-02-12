//Create web server
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send('GET request to the homepage');
});
//Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('GET request to the homepage');
});
//Create a route to create a comment
app.post('/comments', (req, res) => {
    res.send('POST request to the homepage');
});
//Create a route to update a comment
app.put('/comments/:id', (req, res) => {
    res.send('PUT request to the homepage');
});
//Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE request to the homepage');
});