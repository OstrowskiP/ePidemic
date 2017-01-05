import nodemailer from 'nodemailer';

const messageNotSent = 'Wysłanie wiadomości email nie powiodło się.';

export const sendEmailHandler = (request, response) => {
    var poolConfig = {
        pool: true,
        host: 'poczta.o2.pl',
        port: 465,
        secure: true,
        auth: {
            user: 'epidemic.sender@o2.pl',
            pass: 'ePidemic1234'
        }
    };

    var smtpTransport = nodemailer.createTransport(poolConfig);

    // Jak tu wykorzystać parametry z Contact.jsx?
    smtpTransport.sendMail({
        from: "ePidemic contact form <epidemic.sender@o2.pl>",
        to: "ePidemic Support <epidemic.mailbox@gmail.com>",
        // replyTo: "",
        subject: "Contact form",
        text: "Lorem ipsum ipsum lorem."
    }, function (error) {
        if (error) {
            response.json({
                success: false,
                error: {
                    code: 422,
                    message: messageNotSent
                }
            })
        } else {
            response.json({
                success: true
            })
        }

        smtpTransport.close();
    });
};
