import Sequelize from 'sequelize';

const sequelize = new Sequelize('sequelize', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connect;
