import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());


const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

mongoose.connect(databaseURL).then(() => {
    console.log('Connected to the database');
    }).catch((err) => {
    console.log('Database connection failed', err);
});