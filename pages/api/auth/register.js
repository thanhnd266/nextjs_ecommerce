import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import { hashPassword } from '../../../helpers/hashPassword';

connectDB();

const postFunc = async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res);
            break;    
    }
}

const register = async (req, res) => {
    try {
        const { name, email, password, cf_password } = req.body;

        const errMsg = valid(name, email, password, cf_password);

        if(errMsg) {
            return res.status(400).json({err: errMsg});
        }

        const user = await Users.findOne({ email });
        if(user) {
            return res.status(400).json({err: 'This email already exists.'});
        }

        const passwordHash = hashPassword(password);

        const newUser = new Users({ 
            name, 
            email, 
            password: passwordHash, 
            cf_password 
        });

        newUser.save();
        res.json({msg: "Register Success!"})
    } catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default postFunc;