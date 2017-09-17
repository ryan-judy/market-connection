CREATE DATABASE market_connection;
USE market_connection;

CREATE TABLE User
(
	id int NOT NULL AUTO_INCREMENT,
	address varchar(255) NOT NULL,
	date_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
