import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();

const dbString = process.env['DB_CONNECTION_STRING'];
const PORT = process.env.PORT || 5000;

mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();
        app.use(express.json())
        app.use("api", routes);
        app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongo connection established');
});

//graceful shutdown
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected on app termination');
        process.exit(0);
    });
});

