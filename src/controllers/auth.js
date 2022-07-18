const { sendMail} = require("../config/emailer");

const register = async (req, res) =>{
    try {
        const user = req.body;
        sendMail(user);
        return res.status(200).json({
            status: 200,
            data: user,
            message: 'user register success'
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error to register user'
        });
    }
}


module.exports = {
    register
}