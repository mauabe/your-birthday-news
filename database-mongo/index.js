const mongoose = require("mongoose");
<<<<<<< HEAD
const axios = require("axios");

=======
>>>>>>> f386e715fb0474649139cd44f22f731b3d5d901c
mongoose.connect(
  "mongodb://127.0.0.1:27017/bday",
  { useMongoClient: true }
);

const db = mongoose.connection;

db.on("error", error => {
  console.error.bind(console, "mongoose connection error, man");
});

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
  console.log("mongoose connected successfully, yeah!");
});

const NewsSchema = mongoose.Schema({
  headline: String,
  snippet: String,
  web_url: String
});

const News = mongoose.model("News", NewsSchema);

const saveAll = (data, callback) => {
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
