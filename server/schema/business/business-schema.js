(function() {



    CreateBusinessSchema = module.exports = mongoose.Schema({
        profile: {
            type: String,
            unique: true,
            index: true,
        },
        templateType: {
            type: String,
            default: 'default'
        },
        isSiteDeployed: {
            type: Boolean,
            default: false
        },
        businessName: {
            type: String,
        },
        companyName: {
            type: String,
        },

        icon: {
            type: String
        },
        businessCategory: {
            type: String,
        },
        businessType: {
            type: String,
            default: 'personal',
            enum: ['personal', 'community', 'goverment_office', 'non_goverment_office', 'sole_proprietorship', 'partnership_firm', 'joint_venture', 'private_limited', 'one_person']
        },
        businessPresentationType: {
            type: String,
            enum: ['default', 'business_web_presense_simple', 'single_prouduct', 'business_web_presense_advance', 'personal', 'custom'],
            default: 'default'
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
        businessOwnerName: {
            type: String,
        },
        locationCaptureBoolean: {
            type: Boolean,
            default: false,
        },
        businessCompanyDescription: {
            type: String,
        },
        founders: [{
            foundersPicture: { type: String },
            foundersName: { type: String },
            foundersDescription: { type: String },
            linkedInPageLink: { type: String },
            facebookPageLink: { type: String },
            instaPageLink: { type: String },
            typeOf: { type: String },
            created_at: { type: Date, default: Date.now }
        }],
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
        businessDescriptionImage: {
            type: String,

        },
        facebookPageLink: {
            type: String,
            default: null
        },
        instaPageLink: {
            type: String,
            default: null
        },
        linkedInPageLink: {
            type: String,
            default: null
        },
        businessSelfDescription: {
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
        isBusinessCreated: {
            type: Boolean,
            default: false
        },
        OperationalDays: {
            type: String,
            default: 'weekdays',
            enum: ['weekdays', 'weekends', 'everyday', 'temp_closed', 'customs']
        },
        isCustomDays: {
            type: Boolean,
            default: false
        },
        OperationalDaysCustom: {
            type: Object
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
            },
            created_at: { type: Date, default: Date.now }
        },
        timeOperationalTo: {
            type: Number,
            default: 18
        },
        timeOperationalFrom: {
            type: Number,
            default: 9
        },
        timeOperationFromTimeString: {
            type: String,
        },
        timeOperationToTimeString: {
            type: String,
        },
        businessDisplayImages: [{
            picture: { type: String },
            originalname: { type: String },
            secure_url: { type: String },
            url: { type: String },
            created_at: { type: Date, default: Date.now }
        }],
        isBusinessDisplayImagesFound: {
            type: Boolean,
            default: false
        },
        businessWhatsAppLink: {
            type: String,
        },
        whatsapp_number: {
            type: String
        },
        isWhatsAppNumberUpdated: {
            type: Boolean,
            default: false
        },
        whatsapp_number_business: {
            type: String
        },
        isWhatsAppNumbeBusinessUpdated: {
            type: Boolean,
            default: false
        },
        isProductAdded: {
            type: Boolean,
            default: false
        },
        isproductCategoryAdded: {
            type: Boolean,
            default: false
        },
        productCategory: [{
            type: Object,
        }],
        products: [{
            isRoyaltyImageSelected: {
                type: Boolean,
                default: false
            },
            royaltyImage: {
                type: Object
            },
            productPicture: { type: String },
            productHeading: { type: String },
            productDescription: { type: String },
            isProductPriceEnabled: {
                type: Boolean,
                default: false
            },
            productId: {
                type: Number
            },
            productCategory: { type: String },
            productPrice: {
                min_price: { type: Number, default: 0 },
                max_price: { type: Number, default: 0 }
            },
            isStockEnabled: {
                type: Boolean,
                default: false
            },
            stock_unit: { type: Number, default: 0 },
            callToActionType: { type: String },
            link: {
                type: String,
                default: null
            },
            productAdditionalImages: [{
                productPicture: { type: String },
                productHeading: { type: String },
                productDescription: { type: String },
            }],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now }
        }],
        customerContact: [{
            fullname: { type: String },
            email: { type: String },
            mobile: { type: String },
            message: { type: String },
            mobile: { type: String },
            productFor: { type: Object },
            serviceFor: { type: Object },
            contactType: { type: String, default: 'inquiry', enum: ['inquiry', 'product_inquiry', 'service_inquiry'] },
            created_at: { type: Date, default: Date.now }
        }],
        businessReviews: [{
            fullname: { type: String },
            comments: { type: String },
            subject: { type: String },
            rating: { type: Number, default: 5 },
            isReviewApproved: {
                type: Boolean,
                default: false
            },
            created_at: { type: Date, default: Date.now }
        }],
        services: [{
            servicesPicture: { type: String },
            servicesHeading: { type: String },
            servicesDescription: { type: String },
            servicesSubHeading: { type: String },
            isServicesPriceEnabled: {
                type: Boolean,
                default: false
            },
            servicesIcon: {
                type: String
            },
            isServiceIconSelected: {
                type: Boolean,
                default: false
            },
            servicesPrice: {
                min_price: { type: Number, default: 0 },
                max_price: { type: Number, default: 0 }
            },
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now }
        }],
        theme: {
            type: String,
            default: 'paper',
        },
        isThemeTransparent: {
            type: Boolean,
            default: false
        },
        styleType: {
            type: String,
            default: 'light',
            enum: ['light', 'dark']
        },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });


    CreateBusinessSchema.index({ "businessLocation2dIndex": '2dsphere' });
    require("./business-hooks");
    require("./business-methods");

    CreateBusinessModel = module.exports = mongoose.model("CreateBusinessModel", CreateBusinessSchema);


    //             enum: ['cosmos', 'cyborg', 'darkly', 'flatly', 'journal', 'paper', 'sandstone', 'united']



})()