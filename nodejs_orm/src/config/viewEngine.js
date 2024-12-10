import path from 'path';

export default function configView(app) {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
}
