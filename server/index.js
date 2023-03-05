import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { registerValidation, loginValidation, postCreateValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

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

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use(express.json());
app.use('/upload', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/register', registerValidation, UserController.registration);
app.post('/login', loginValidation, UserController.login);
app.get('/getMe', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});
