const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY='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';
export function sendMail() {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
  
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
    to: 'congtrinh097@gmail.com',
    from: 'meno.com@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
}