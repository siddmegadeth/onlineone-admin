(function() {
    storage = module.exports = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function(req, file, cb) {
            log("####################");
            log("Multer Name :");
            log(file);
            log("####################");
            cb(null, Date.now() + file.originalname);
        }
    });

    upload = module.exports = multer({
        storage: storage
    });

    // Add Upload Display Pictures Middleware
    storageDiskStorageClodinary = module.exports = cloudinaryStorage({
        cloudinary: cloudinary,
        folder: 'onlineone_business',
        allowedFormats: ['jpg', 'png', 'jpeg'],
        filename: function(req, file, cb) {
            log("Cloudinary Push Service For onlineone_business Image Upload")
            log(file);
            //get original file name
            var result = file.mimetype.split("/");
            ext = "." + result[1];
            log(null, file.fieldname + '-' + Date.now() + ext);
            cb(null, file.fieldname + '-' + Date.now());
        }
    });

    storageDiskStorageClodinary2 = module.exports = cloudinaryStorage({
        cloudinary: cloudinary,
        folder: 'onlineone_display_picture',
        allowedFormats: ['jpg', 'png', 'jpeg'],
        filename: function(req, file, cb) {
            log("Cloudinary Push Service For onlineone_display_picture Image Upload")
            log(file);
            //get original file name
            var result = file.mimetype.split("/");
            ext = "." + result[1];
            log(null, file.fieldname + '-' + Date.now() + ext);
            cb(null, file.fieldname + '-' + Date.now());
        }
    });
    // bestQuality = module.exports = "upload/ar_4:3,c_fill/c_scale,w_auto,dpr_auto/";
    // https://res.cloudinary.com/hookup/image/upload/c_scale,e_anti_removal,q_100,r_8,w_1000/q_auto/sample.jpg

    //bestQuality = module.exports = "upload/w_600/q_auto:best,f_auto:best/";

    //bestQuality = module.exports = "upload/c_scale,e_anti_removal,q_100,r_8,w_1000/q_auto/";
    bestQuality = module.exports = "upload/c_scale,q_100,r_8,w_1000/q_auto/";
    bestQuality = module.exports = 'upload/c_fill,q_100,r_8,w_1000/q_100/';
    //Below Storage is For gender Verification Upload
    //mutlerUpload = module.exports = multer({ storage: storageDiskStorage });
    //mutlerUpload = module.exports = multer({});
    businessCreateUpload = module.exports = multer({ storage: storageDiskStorageClodinary });
    displayPictureUpload = module.exports = multer({ storage: storageDiskStorageClodinary2 });
})()