import { getUserList, createUser } from '../service/userService.js';

export const handleUserList = async (req, res) => {
    try {
        const users = await getUserList();
        res.render('users.ejs', { users });
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
};

export const handleCreateUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        await createUser(username, password, email);
        res.redirect('/users');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
};
