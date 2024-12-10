import express from 'express';
import dotenv from 'dotenv';
import configView from './config/viewEngine.js';
import webRoute from './route/web.js';
import connectDB from './config/connectDB.js';

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

configView(app);
connectDB();
webRoute(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
