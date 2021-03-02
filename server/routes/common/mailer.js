(function() {
    app.get('/get/mailer/job', ensureAuthenticated, function(req, resp) {
        log('/get/mailer/job');
        var mailer = req.body.mailer || req.query.mailer;
        mailer = JSON.parse(mailer);
        log(mailer);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gethikejobs@gmail.com',
                pass: 'adobe123'
            }
        });

        var mailOptions = {
            from: 'gethikejobs@gmail.com',
            to: mailer.email,
            subject: 'getHike : Your Selected Job Opening ',
            text: 'Hey ' + mailer.fullname + 'this might interest you ' + mailer.url
        };

        log(mailOptions);

        transporter.sendMail(mailOptions, function(err, info) {

            if (err) {
                console.error("Error Occured");
                console.log(err);
                resp.send({ status: false, isEmailSent: false, message: 'Some Error Occured Sending Email', error: err });

            }

            console.log('Email sent: ' + info.response);
            resp.send({ status: true, isEmailSent: true, message: 'Email Sent Successfully', info: info });

        })

    });


})()