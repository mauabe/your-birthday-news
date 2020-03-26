const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const db = require("../database-mongo/index");
const request = require("request");
const path = require("path");
// const helper = require("../nyt/helper");
const key = require("../nyt/nytkeys");

const hostname = "127.0.0.1";
const port = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname + "/../client/dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/bday", function(req, res) {
  let birthday = req.body.birthday;
  //console.log ('in post1:', req.body.birthday);

  request.get(
    {
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        "api-key": `${key.TOKEN}`,
        q: "news",
        begin_date: `${birthday}`,
        end_date: `${birthday}`,
        fl: "headline, snippet, web_url"
      }
    },
    function(err, response, body) {
      body = JSON.parse(body);
      //console.log('this is the whole data ', body.response.docs);
      let data = body.response.docs;

      db.saveAll(data, (err, data) => {
        if (err) {
          console.log("error in callback saveall", err);
        } else {
          console.log("success in callback saveall", data);
        }
      });
    }
  );
});

app.get("/bday", function(req, res) {
  db.News.find({})
    .limit(5)
    .exec(function(err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(data);
        //console.log('working in get', data)
      }
    });
});

// items.selectAll(function(err, data) {
//   if(err) {
//     res.status(500).send(err);
//   } else {
//     res.json(data);
//   }
// });

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
