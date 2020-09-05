import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const dbString = process.env['DB_CONNECTION_STRING'];
const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('Bello');
// });

app.get('/', (request, response) => {
    response.sendFile(path.resolve('src', 'pages/index.html'))
});

console.log(dbString);
app.listen(PORT, () => console.log('Server running'));

