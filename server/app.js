(function() {
    // require('dotenv').config();
    require("./init/index");
    require("./routes/index"); // Import Routes
    require("./heroku/index"); // Import Routes
    require("./schema/index"); // Import Routes

    // Enable Multi Cluster App (Master Slave Architecture)
    require("./multi-cluster"); // Import Routes
})();

