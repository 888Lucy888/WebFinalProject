const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://zodiacAdmin:<4bwMKcmbZSRUi6r>@cluster0.zd46e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export function addUser() {
  client.connect((err) => {
    const collection = client.db("test").collection("devices");

    // perform actions on the collection object
    client.close();
  });
}
