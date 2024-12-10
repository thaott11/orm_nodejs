import bcrypt from 'bcrypt';
import db from '../models/index.js';

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hashedPassword = bcrypt.hashSync(userPassword, salt);
    return hashedPassword;
};

export const getUserList = async () => {
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (username, password, email) => {
    const hashedPassword = hashPassword(password);
    try {
        await db.User.create({ username, password: hashedPassword, email });
    } catch (error) {
        throw error;
    }
};
