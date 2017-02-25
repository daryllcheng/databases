var db = require('../db');

module.exports = {  
  
  messages: {    
    get: function () {}, // a function which produces all the messages
    post: function (message) { 
      console.log("messages fuck you",message);

      db.query(`INSERT INTO messages (content) values ("${message.message}")`,`INSERT INTO users (name) values ("${message.username}")`,`INSERT INTO rooms (roomName) values ("${message.room}")` ,function (error, results, fields) {
        
        if (error){ throw error;
          console.log('error in message post', error);
        } else{
          console.log('added worked!')
        }
      });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message,cb) {      
      db.query(`INSERT INTO users (name) values ("${message.username}")`,function (error, results, fields) {
        if (error){ cb(error);
          console.log('error in message post', error);
        } else{       
          cb(null)   
          console.log('added worked!')
        }
      });
    }
  }
};

