require('../lib/fakes');
var async = require('async');

module.exports = function upload(stream, idOrPath, tag, done) {
    var tx = db.begin();
    var total = global.parallelQueries;

    async.times(total, function(i, cb) {
        FileVersion.insert({index: i})
            .execWithin(tx, cb);
    }, function(err) {
        if (err) {
            tx.rollback();
            done(err);
        }
        else {
            tx.commit();
            done();
        }
    });
}
