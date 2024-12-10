import express from 'express';
import { handleUserList, handleCreateUser } from '../controller/homeController.js';

const router = express.Router();

const webRoute = (app) => {
    router.get('/', handleUserList);
    router.post('/create', handleCreateUser);

    app.use('/', router);
};

export default webRoute;
