var db = require('./index.js');

db.fillDB().then(function() {
    console.log('DONE');
});
