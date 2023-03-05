import express from 'express';
import mongoose from 'mongoose';
import { registerValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js'

mongoose.set('strictQuery', true);
mongoose
    .connect(
        'mongodb+srv://admin:admin@cluster0.ielym5z.mongodb.net/MyProject?retryWrites=true&w=majority',
    )
    .then(() => {
        console.log('DB ok');
    })
    .catch((err) => {
        console.log('error', err);
    });
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/register', registerValidation, UserController.registration);

app.post('/login', UserController.login);

app.get('/getMe', checkAuth, UserController.getMe)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});
