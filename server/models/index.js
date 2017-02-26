var db = require('../db');

module.exports = {

    messages: {
      get: function () {}, // a function which produces all the messages
      post: function (message) {
        console.log("messages fuck you", message.message);

        //insert it into the users first - pass name
        //insert to rooms - pass roomname
        //insert to messages
        db.query(`select id from rooms where ("${message.roomname}")`, function (error, results, fields) {
              if (error) {
                console.log(error);
              } else {
                if(results[0]){
                db.query(`INSERT INTO rooms (roomName) values ("${message.roomname}")`, function (error, results, fields) {
                  if (error) {
                    throw error;
                    console.log('error in message post', error);
                  } else {
                    console.log('added room message!')
                    db.query(`INSERT INTO messages (content,roomId,user_id) values ("${message.message}", (select rooms.id from rooms where roomName = "${message.roomname}"), (select users.id from users where name = "${message.username}"))`, function (error, results, fields) {
                      if (error) {
                        throw error;
                        console.log('error in message post', error);
                      } else {
                        console.log("last insert worked");
                      }
                    })
                  }
                }
              )
            }
              }
            })
        }
          },

          users: {
            // Ditto as above.
            get: function () {},
            post: function (message, cb) {
              var test;
              db.query(`select id from users where name = "${message.username}"`, function (error, results, fields) {
                try {
                  if (error) {
                    console.log(':(')
                  } else {
                    console.log(results[0]);
                    test = results[0];
                    if (!test) {
                      db.query(`INSERT INTO users (name) values ("${message.username}")`, function (error, results, fields) {
                        if (error && error.code !== "ER_DUP_ENTRY") {
                          cb(error);
                          console.log('error in message post', error);
                        } else {
                          console.log('added worked!')
                          cb(null);
                        }
                      });
                    }
                    cb(null);
                  }
                } catch (error) {
                  cb(null);
                }
              });
            }
          }
      };
