require('dotenv').config();
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import todoRouter from '../Routes/todoRouter';
import userRouter from '../Routes/userRouter';
import bodyParser from 'body-parser';
import databaseConnection from '../../App/Infrastructure/Models/Mongoose/mongoose';
const app = express();

// middleware
app.use(cors());
app.use(logger());
app.use(express.json());
app.use(bodyParser.json())

// mongoose
databaseConnection();

// routes
app.use('/post', todoRouter);
app.use('/user', userRouter);


export default app;