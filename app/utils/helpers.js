var axios = require("axios");

// Helper functions for making API Calls
var helpers = {
  // gets search results from NYT api
  queryNYTimes: function(keyword, startDate, endDate){
    var searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var key = "ca789060234c4688a4bc3a324e26de6c";
    var recordsLimit = 10;
    searchURL += "?api-key=" + key + "&q=" + keyword;
    if (startDate.length > 1){
      searchURL += "&begin_date=" + startDate + "0101";
    }
    if (endDate.length > 1){
      searchURL += "&end_date=" + endDate + "1231";
    }
    return axios.get(searchURL);
  },
  // This function hits our own server to retrieve the saved articles
  getSaved: function() {
    return axios.get("/api");
  },
  //This function posts new saved articles to our database.
  postSaved: function(title, link, comment) {
    return axios.post("api", {
      title: title,
      link: link,
      comment: comment
    });
  }
};

// We export the API helper
module.exports = helpers;
