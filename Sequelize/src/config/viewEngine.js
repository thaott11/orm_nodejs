import express from 'express';
import path from 'path';

const configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join('./src', 'views'));
    app.use(express.static(path.join('./src', 'public')));
};

export default configViewEngine;