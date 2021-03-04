(function() {



    ProfileSchema = module.exports = mongoose.Schema({
        profile: {
            type: String,
            unique: true,
            index: true,
        },
        mobile: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            index: true,
            required: true,
        },
        email_verified: {
            type: Boolean,
            default: false
        },
        platform: {
            type: Object,
        },
        locale: {
            type: String,
        },
        fullname: {
            type: String,
        },
        picture: {
            type: String
        },
        countryCode: {
            type: Object,
        },
        login_type: {
            type: String,
            enum: ['email', 'google', 'gmail', 'facebook', 'mobile', 'instagram', 'github', 'linkedin', 'device']
        },
        location: {
            type: Object,
            properties: {
                type: {
                    type: String,
                    enum: ['Point', 'LineString', 'Polygon'],
                    default: 'Point'
                },
                coordinates: {
                    type: [Number],
                    default: [0, 0]
                }
            }
        },
        subscription_type: {
            type: String,
            default: 'trial',
            enum: ['freemium', 'paid', 'trial', 'trial_over', 'subscription_over']
        },
        paymentReceived: {
            type: String,
            default: 'trial',
            enum: ['trial', 'razorpay', 'paid_cash', 'paid_upi'],
            created_at: { type: Date, default: Date.now },
        },
        paymentAmount: {
            type: Number,
            default: 4200,
            created_at: { type: Date, default: Date.now },
        },
        isBusinessCreated: {
            type: Boolean,
            default: false
        },
        freemium_end_date: {
            type: Date
        },
        freemium_start_date: {
            type: Date
        },
        subscription_start_date: {
            type: Date
        },
        subscription_end_date: {
            type: Date
        },
        isSubscribedToPaid: {
            type: Boolean,
            default: false
        },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });

    ProfileSchema.index({ "location": '2dsphere' });


    require("./profile-hooks");
    require("./profile-methods");

    ProfileModel = module.exports = mongoose.model("ProfileModel", ProfileSchema);

})()