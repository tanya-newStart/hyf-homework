-- Active: 1720951943323@@127.0.0.1@3306@SocialNetwork
CREATE DATABASE SocialNetwork
DEFAULT CHARACTER SET = 'utf8mb4';
use SocialNetwork;
CREATE TABLE User (
    user_id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registration_datetime DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `User`(name,email,password) VALUES
("Tanya Art","tanya.art@gmail.com","pass");

INSERT INTO `User`(name,email,password) VALUES
("Nick Small","nicksmall@yahoo.com","abc"),
("Diana West","dianawest@nelnet.com","pass123"),
("Jason Duval","jduval@gmail.com","pass1234");

CREATE TABLE Post (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content text NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Foreign Key (user_id) REFERENCES User(user_id)
);

INSERT INTO `Post` (user_id,title,content) VALUES
(1,"The first post","Testing creation date");
INSERT INTO `Post` (user_id,title,content) VALUES
(2,"Greetings","Good morning from Denamrk!"),
(3,"Update","Got a new job!"),
(4, "Vacation time!","Enjoying our trip to Spain");

UPDATE `Post`
set content = "Testing update time"
where post_id =1;

CREATE TABLE Comment (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    parent_comment_id INT DEFAULT NULL,
    content text NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Foreign Key (user_id) REFERENCES User(user_id),
    Foreign Key (post_id) REFERENCES Post(post_id),
    Foreign Key (parent_comment_id) REFERENCES Comment(comment_id) ON DELETE CASCADE
);
INSERT INTO `Comment`(user_id,post_id,content) VALUES
(1,2,"Good night from USA!");

INSERT INTO `Comment`(user_id,post_id,content) VALUES (2,3,"Congratulations!");

CREATE TABLE Reaction (
    reaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT DEFAULT NULL,
    comment_id INT DEFAULT NULL,
    reaction_type ENUM('like','highfive','laugh','cry') NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id,post_id,comment_id,reaction_type),
    Foreign Key (user_id) REFERENCES User (user_id),
    Foreign Key (post_id) REFERENCES Post (post_id),
    Foreign Key (comment_id) REFERENCES Comment (comment_id),
    CHECK (post_id is not null or comment_id is not null)
);

INSERT INTO `Reaction`(user_id,post_id,reaction_type) VALUES
(2,1,"like"),
(3,1,"highfive"),
(4,2,"laugh");

CREATE TABLE Friendship (
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    friendship_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user1_id, user2_id),
    Foreign Key (user1_id) REFERENCES User (user_id),
    Foreign Key (user2_id) REFERENCES User (user_id),
    CHECK (user1_id != user2_id)
);

INSERT INTO `Friendship` (user1_id,user2_id) VALUES
(1,4),
(1,2),
(2,3),
(2,4);
