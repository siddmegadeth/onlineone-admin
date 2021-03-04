(function() {




    CreateBusinessSchema.pre('save', function(next) {
        now = new Date();
        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now
        }
        next();
    });


    




})()