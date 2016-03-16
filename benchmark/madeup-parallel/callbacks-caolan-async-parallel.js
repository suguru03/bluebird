require('../lib/fakes');
var async = require('async');

module.exports = function upload(stream, idOrPath, tag, done) {
    var tx = db.begin();

    async.times(global.parallelQueries, function(i, done) {
        FileVersion.insert({index: i}).execWithin(tx, done);
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
