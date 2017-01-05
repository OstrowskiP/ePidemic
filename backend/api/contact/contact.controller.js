import nodemailer from 'nodemailer';

const messageNotSent = 'Wysłanie wiadomości email nie powiodło się.';

export const sendEmailHandler = (request, response) => {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        pool: true,
        host: 'poczta.o2.pl',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'epidemic.sender@o2.pl',
            pass: 'ePidemic1234'
        }
    });

    smtpTransport.sendMail({  //email options
        from: "ePidemic contact form <epidemic.sender@o2.pl>",
        to: "ePidemic Support <epidemic.mailbox@gmail.com>",
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
