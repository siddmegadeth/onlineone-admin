(function() {



    BusinessEntitySchema = module.exports = mongoose.Schema({
        businessName: {
            type: String,
        },
        businessCategory: {
            type: String,
        },
        businessType: {
            type: String,
        },
        businessGST: {
            type: String,
        },
        businessAddress: {
            type: String,
        },
        businessCity: {
            type: String,
        },
        businessState: {
            type: String,
        },
        businessPincode: {
            type: Number,
        },
        locationCaptureBoolean: {
            type: Boolean,
            default: false,
        },
        businessServingArea: {
            type: Object,
            default: false,
        },
        currentBusinessLocationBoolean: {
            type: Boolean,
            default: false,
        },
        currentBusinessLocation: {
            type: Object,
        },
        businessPhone: {
            type: String,
        },
        phoneAlt: {
            type: String,
        },
        businessEmail: {
            type: String,
        },
        businessDescription: {
            type: String,
        },
        businessIcon: {
            type: String,
        },
        businessWebsite: {
            type: String,
            unique: true,
            index: true,
        },
        businessLocation2dIndex: {
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
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });


    CreateBusinessSchema = module.exports = mongoose.Schema({
        profile: {
            type: String,
            unique: true,
            index: true,
        },
        businessEntity: {
            type: [BusinessEntitySchema],
            unique: true,
        },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });




    ProfileSchema.index({ "businessLocation2dIndex": '2dsphere' });
    require("./business-hooks");
    require("./business-methods");

    CreateBusinessModel = module.exports = mongoose.model("CreateBusinessModel", CreateBusinessSchema);
    BusinessEntityModel = module.exports = mongoose.model("BusinessEntityModel", BusinessEntitySchema);

})()