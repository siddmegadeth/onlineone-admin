(function() {

    log('Setup EJS');
    log(__dirname);
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, 'views'));

})();