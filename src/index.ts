import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('Bello');
// });

app.get('/', (request, response) => {
    response.sendFile(path.resolve('src', 'pages/index.html'))
});

app.listen(PORT, () => console.log('Server running'));

