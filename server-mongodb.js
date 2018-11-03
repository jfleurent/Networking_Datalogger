var MongoClient = require('mongodb').MongoClient;
var url = "https://cloud.mongodb.com/v2/5bddc084c56c98220cd19c03#clusters/detail/Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});