const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://zodiacAdmin:<4bwMKcmbZSRUi6r>@cluster0.zd46e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const DB = process.env.uri;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, database) {
      if (database) {
        _db = database.db("myFirstDatabase");
        console.log(`Succesful connection to mongoDB`);
      }
      return callback(err);
    });
  },

  getDatabase: function () {
    return _db;
  },
};
