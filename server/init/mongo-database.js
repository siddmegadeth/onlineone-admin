(function() {



    mongoDbURI = module.exports = process.env.MONGOLAB_URI;

    mongoDB = module.exports = mongoDbURI;

    //const uriCore = "mongodb+srv://admin:admin123@cluster0-oxday.mongodb.net/gethike-production?retryWrites=true&w=majority";

    (function() {

        log(mongoDbURI);
        mongoose.connect(mongoDB, {
                dbName: process.env.MOBGODB_NAME
            })
            .then(() => {
                console.log('Connection to the online.com DEV DB/ Atlas Cluster is successful!')
            })
            .catch((err) => console.error(err));

    })()


})()