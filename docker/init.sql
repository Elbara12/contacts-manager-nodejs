CREATE DATABASE IF NOT EXISTS dev;
USE dev;

CREATE TABLE IF NOT EXISTS contacts (
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20)
);