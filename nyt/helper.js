const request = require('request');
const axios = require('axios');
const key = require('../nytkey.js');


//FROM NYTIMES

const getNews = function (birthday, cb) {

  request.get({
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    qs: {
      'api-key': `${key.TOKEN}`,
      'q': 'news',
      'begin_date': `${birthday}`,
      'end_date': `${birthday}`,
      'fl': 'headline, snippet, web_url'
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body);
  })

    // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // url += '?' + $.param({
  //   'api-key': "c25d636aa39648b4ada8b06c0f1db90d",
  //   'q': "news",
  //   'begin_date': "20011212",
  //   'end_date': "20011212",
  //   'fl': "headline, snippet, web_url"
  // });
  // $.ajax({
  //   url: url,
  //   method: 'GET',
  // }).done(function(result) {
  //   console.log(result);
  // }).fail(function(err) {
  //   throw err;
  // });

};