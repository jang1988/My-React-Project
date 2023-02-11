import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import { registerValidation } from './validations.js';

import UserModel from './models/User.js';

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

app.post('/register', registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            passwordHash,
            fullName: req.body.email,
            email: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
        });

        const user = await doc.save();

        res.json(user);
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        });
    }
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});
