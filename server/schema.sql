DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---


-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS rooms;
		
CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);



DROP TABLE IF EXISTS messages;
		
CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  content MEDIUMTEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  roomId INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (roomId) REFERENCES  rooms(id),
  FOREIGN KEY (user_id) REFERENCES  users(id)
);



-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `users` ADD FOREIGN KEY (id) REFERENCES `messages` (`user_id`);
-- ALTER TABLE `rooms` ADD FOREIGN KEY (id) REFERENCES `messages` (`roomId`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`content`,`createdAt`,`roomId`,`user_id`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`roomName`) VALUES
-- ('','');