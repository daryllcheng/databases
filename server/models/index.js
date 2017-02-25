var db = require('../db');

module.exports = {  
  
  messages: {    
    get: function () {}, // a function which produces all the messages
    post: function (message) { 
      console.log(message);
      // db.query(function (error, results, fields) {
      //   if (error){ throw error;
      //     console.log('error in message post', error);
      //   } else{
      //     console.log('added worked!')
      //   }
      // });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message) {
      console.log(message.body.username);
      console.log("we are in the model users! ",message);
      db.query(`INSERT INTO users (name) values ("${message.body.username}")`,function (error, results, fields) {
        if (error){ throw error;
          console.log('error in message post', error);
        } else{
          console.log('added worked!')
        }
      });
    }
  }
};

