import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('Bello');
// });

app.get('/home', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.listen(PORT, () => console.log('Server running'));

