var db = require('./database');


db.fillDB().then(function() {
    console.log('DONE');
});
