const mongoose = require("mongoose");
const axios = require("axios");
mongoose.connect(
  "mongodb://127.0.0.1:27017/bday",
  { useMongoClient: true }
);

const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error, man");
});

db.once("open", function() {
  console.log("mongoose connected successfully, yeah!");
});

let NewsSchema = mongoose.Schema({
  headline: String,
  snippet: String,
  web_url: String
});

const News = mongoose.model("News", NewsSchema);

let saveAll = (data, callback) => {
  //console.log("from the save function", data);
  data.forEach(
    item =>
      new News({
        headline: item.headline.main,
        snippet: item.snippet,
        web_url: item.web_url
      }).save((error, data) => {
        if(error){
          callback(error, null)
        } else {
          callback(null, data)
        }
      })
  );
};

const selectAll = (callback) => {
  News.find({}, function(err, res) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
};

module.exports.News = News;
module.exports.saveAll = saveAll;
module.exports.db = db;
module.exports.selectAll = selectAll;
