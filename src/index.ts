import express from 'express';
import path from 'path';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Bello');
// });

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.listen(5000, () => console.log('Server running'));

