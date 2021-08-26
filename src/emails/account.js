const mailjet = require('node-mailjet')
    .connect(process.env.MAILJET_API_KEY, 'ea6535dd0a7e53fb99524c0987a0382f');

const sendWelcomeEmail = (email, name) => {
    mailjet.post("send", {'version': 'v3.1'}).request({
        "Messages": [
            {
                "From": {
                    "Email": "rochmadwa@students.undip.ac.id",
                    "Name": "Rochmad"
                },
                "To": [
                    {
                        "Email": email,
                        "Name": name
                    }
                ],
                "Subject": "Thanks for joining us!",
                "TextPart": `Welcome to the app, ${name}. Let me know how you get along with the app.`,
            }
        ]
    });
};
const sendCancellationEmail = (email, name) => {
    mailjet.post("send", {'version': 'v3.1'}).request({
        "Messages": [
            {
                "From": {
                    "Email": "rochmadwa@students.undip.ac.id",
                    "Name": "Rochmad"
                },
                "To": [
                    {
                        "Email": email,
                        "Name": name
                    }
                ],
                "Subject": "We're sad to see you go!",
                "TextPart": `Good bye, ${name}. I hope to see you come back soon.`,
            }
        ]
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}