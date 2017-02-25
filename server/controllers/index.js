var models = require('../models');

module.exports = {
  messages: {
    // console.log("i'm here in controllers message"),
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body,function(error){

      });
      res.end();

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // console.log("i'm here in controllers user"),
    get: function (req, res) {},
    post: function (req, res) {
      console.log("controller post ",req.body);
      models.users.post(req.body,function(error){
        if(error){
          console.log("error in the user controller ", error)
        }
      });
    }
  }
};

