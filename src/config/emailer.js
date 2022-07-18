const emailer = require('nodemailer');
const { templateEmail } = require('../template/template');

// config SMTP
const createTrans = () =>{
    const transport = emailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '13217088dbb4fa',
            pass: '8e46821014ca2b'
        }
    });

    return transport;
}

const sendMail = async(user) =>{
    const transport = createTrans();
    const info = await transport.sendMail({
        from: '"Gerson Benito" <info@info.com>', // Sender address
        to: user.email, // List of receivers
        subject: `Hola ${user.name} bienvenido`, // Subject line
        html: templateEmail(user), // html body
    });

    console.log('message sent', info.messageId);
    return
}

module.exports = { sendMail }