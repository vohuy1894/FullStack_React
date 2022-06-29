CREATE DATABASE restaurantreact;

CREATE TABLE user_react(
    user_id INTEGER PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);