(function() {



    CustomerLeadSchema = module.exports = mongoose.Schema({
        fullname: {
            type: String
        },
        email: {
            type: String,
            index: true,
        },
        subject: {
            type: String
        },
        message: {
            type: String
        },
        mobile: {
            type: String
        },
        leadType: {
            type: String,
            enum: ['invite', 'inquiry']
        },
        isAppLinkMailSent: {
            type: Boolean,
            default: false
        },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });

    require("./customer-lead-hooks");
    require("./customer-lead-methods");

    CustomerLeadModel = module.exports = mongoose.model("CustomerLeadModel", CustomerLeadSchema);

})()