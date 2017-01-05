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

    smtpTransport.sendMail({
        from: "ePidemic contact form <epidemic.sender@o2.pl>",
        to: "ePidemic Support <epidemic.mailbox@gmail.com>",
        replyTo: request.body.emailSender,
        subject: "Contact form",
        text: request.body.emailBody
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
                success: true,
                message: 'Wysłano wiadomość'
            });
        }

        smtpTransport.close();
    });
};
