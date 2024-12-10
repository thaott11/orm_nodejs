import express from 'express';
import { handleUserList, handleCreateUser } from '../controller/homeController.js';

const router = express.Router();

const webRoute = (app) => {
    router.get('/users', handleUserList);
    router.post('/create-user', handleCreateUser);

    app.use('/', router);
};

export default webRoute;
