import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';
import { comparePassword } from '../../../helpers/hashPassword';

connectDB();

const loginFunc = async (req, res) => {
    switch(req.method) {
        case 'POST':
            await login(req, res);
            break;
    }
};

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await Users.findOne({ email });

        if(!user) {
            return res.status(400).json({err: 'User does not exist'});
        }

        const isMatch = await comparePassword(password, user.password);

        if(!isMatch) {
            return res.status(400).json({ err: 'Incorrect password' });
        }

        const access_token = createAccessToken({ id: user._id });
        const refresh_token = createRefreshToken({ id: user._id });

        res.json({
            msg: 'Login success!',
            access_token,
            refresh_token,
            user: {
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                root: user.root,
            }
        })

    } catch(err) {
        res.status(500).json({err: err.message});
    }
}


export default loginFunc;