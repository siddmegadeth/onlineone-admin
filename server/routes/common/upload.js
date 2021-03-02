(function() {

    // Upload Display Pictures 

    app.post('/post/upload/display/picture', displayPictureUpload.any(), function(req, resp) {
        log('/post/upload/display/picture');
        var profile = req.body.profile || req.query.profile;

        var received = req.files || req.file;
        log("Received Email/User To Update Display Picture :");
        log(profile);
        log("Retrieved Picture");
        log(received[0]);
        log("Edited Transformed :");
        var temp1 = received[0].secure_url.split("upload/");
        var secured_url = temp1[0] + "upload/w_600/q_auto,f_auto/" + temp1[1];
        log(secured_url);
        ProfileModel.findOneAndUpdate({ profile: profile }, { picture: secured_url }, { "new": true }, function(errUpdate, updated) {

            if (errUpdate) {
                resp.send({ status: false, message: 'Error Occured Updating Diplay Image', isPictureUpdated: false });
            }

            log("Updated :");
            log(updated);
            resp.send({ status: true, message: 'Profile Picture Updated', isPictureUpdated: true, profile: updated })
        })

    });



    app.get('/get/link/preview', function(req, resp) {
        log('/get/link/preview');
        log(req.url || req.url || req.param["url"]);
        var url = req.body.url || req.query.url || req.body.url || req.param["url"];
        log(url);
        url = decodeURL(url);
        log(url);
        linkPreview(url).then(response => {
            log(response);
            /*  response = {
                    description:"GitHub is where people build software. More than 24 million people use GitHub to discover, fork, and contribute to over 67 million projects.",
                    image:"https://assets-cdn.github.com/images/modules/open_graph/github-logo.png",
                    imageHeight:"1200",
                    imageType:"image/png",
                    imageWidth:"1200",
                    siteName:"GitHub",
                    title:"Build software better, together",
                    url:"http://github.com"
                }
            */
            resp.send({
                "success": 1,
                "meta": {
                    "title": response.title,
                    "site_name": response.siteName,
                    "description": response.description,
                    "image": {
                        "url": response.image
                    }
                }
            })
        });


    });



})()