var models = require('../models');
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type':'text/plain'
};
module.exports = {
  messages: {
    // console.log("i'm here in controllers message"),
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {      
      console.log("control post message", req.body);
      models.messages.post(req.body, function (error) {
        if (error) {
          console.log("error in the model controller ", error)
        }
      });
      // res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // console.log("i'm here in controllers user"),
    get: function (req, res) {},
    post: function (req, res) {
      console.log("controller post ", req.body);
      models.users.post(req.body, function (error) {
        if (error) {
          console.log("error in the user controller ", error)
        } else {
          console.log("users post success cb")
          res.writeHead(201, defaultCorsHeaders);
          res.end();
        }
      });
    }
  }
};
