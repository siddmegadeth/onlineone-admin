(function() {

    // ubdomain
    // app.use((req, res, next) => {
    //     if (req.subdomains.length) {
    //         // otherwise we have subdomain here
    //         var subdomain = req.subdomains.slice(-1)[0];
    //         // keep it
    //         log('subdomain');
    //         log(subdomain);
    //         req.subdomain = subdomain;
    //     }
    //     next();
    // });

    // var subdomainOptions = {
    //     base: 'www.onlineone.in' //base is required, you'll get an error without it.
    // };

    // app.use(require('subdomain')(subdomainOptions));




    app.use(function(req, res, next) {
        if (!req.subdomains.length || req.subdomains.slice(-1)[0] === 'www') return next();
        // otherwise we have subdomain here
        var subdomain = req.subdomains.slice(-1)[0];
        // keep it
        req.subdomain = subdomain;
        next();
    });



    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Authorization, Origin, Content-Type, Accept"
        );
        res.setHeader("Access-Control-Allow-Credentials", "true");
        next();
    });


    // IP Express
    app.use(expressip().getIpInfoMiddleware);
    app.use(compression());


    //app.use(cors());
    // parse application/json
    app.use(bodyParser.json())
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({
        extended: false
    }))

    //app.use(bodyParser({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 200000 }));
    app.set("PORT", 3009 || process.env.PORT);
    app.set('host', process.env.NODE_IP || 'localhost');

    app.use('/', gzippo.staticGzip("public/web/admin"));
    // app.use('/demo/flatter', gzippo.staticGzip("public/web/wwww3"));

    app.use(gzippo.staticGzip("cdn"));
    app.use(gzippo.compress());

    // security Path
    app.use(helmet());
    // app.use(helmet({
    //     frameguard: false
    // }))
    app.use(helmet({
        frameguard: {
            action: 'deny'
        }
    }));






})()