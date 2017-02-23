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
    return axios.get(searchURL).then(function(responseRaw){
      if (responseRaw.status === "ERROR"){
        return "Error: " + responseRaw.errors[0];
      }
      if (responseRaw.data.response.docs.length > 0){
        // validate and process the data into the format we want
        var response = responseRaw.data.response.docs.map(function(article){
          var articleObject = {
            id: article._id,
            byline: "",
            headline: "",
            snippet: "",
            image: "",
            date: "",
            link: ""
          };
          if (article.byline && article.byline.original){
            articleObject.byline = article.byline.original;
          }
          if (article.headline && article.headline.main){
            articleObject.headline = article.headline.main;
          }
          if (article.lead_paragraph){
            articleObject.snippet = article.lead_paragraph;
          }
          if (article.multimedia[0] && article.multimedia[0].type === "image"){
            articleObject.image = "http://www.nytimes.com/" + article.multimedia[0].url;
          }
          if (article.pub_date){
            articleObject.date = article.pub_date;
          }
          if (article.web_url){
            articleObject.link = article.web_url;
          }
          return articleObject;
        });
        return response;
      } else {
        return "";
      }
    });
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
