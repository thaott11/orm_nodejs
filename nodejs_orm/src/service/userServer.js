const bcrypt = require('bcrypt');
const db = require('../models/index.js'); 

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt);
};

const getUserList = async () => {
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

const createUser = async (username, password, email) => {
    const hashedPassword = hashPassword(password);
    try {
        await db.User.create({ username, password: hashedPassword, email });
    } catch (error) {
        throw error;
    }
};

// Export functions using CommonJS syntax
module.exports = {
    hashPassword,
    getUserList,
    createUser,
};
