import userservice from '../service/userServer.js';

// Controller to handle fetching all users
export const handleUserList = async (req, res) => {
    try {
        const users = await userservice.getUserList();
        return res.render('users.ejs', { users }); // Render 'users' view with data
    } catch (error) {
        return res.status(500).send('Error fetching users');
    }
};

export const handleCreateUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        await userservice.createUser(username, password, email);
        return res.redirect('/');
    } catch (error) {
        return res.status(500).send('Error creating user');
    }
};


