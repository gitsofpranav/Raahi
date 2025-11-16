import express from 'express'
import cors from 'cors'
import dotenv, { config } from 'dotenv'
import connectToDb from './db/db.js';

dotenv.config({
    path: './.env'
});

const app = express();
app.use(cors());

console.log("DB_CONNECT from env:", process.env.DB_CONNECT);

connectToDb();

app.get('/', (req,res) => {
    res.send("I am home page");
})

export default app;