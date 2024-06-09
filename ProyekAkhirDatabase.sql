CREATE TABLE Dine_in (
  id SERIAL PRIMARY KEY,
  qr_code text,
  dine_time date,
  isExp INTEGER,
  session varchar
);

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name varchar,
  username varchar UNIQUE,
  email varchar UNIQUE,
  password varchar,
  poin INTEGER,
  isAdmin boolean
);

CREATE TABLE Food (
  id SERIAL PRIMARY KEY,
  name varchar,
  description text,
  price int,
  imageurl text
);

CREATE TABLE Batch (
  id SERIAL,
  session varchar NOT NULL,
  orderid varchar NOT NULL,
  type varchar NOT NULL,
  isDone boolean,
  qty INT NOT NULL,
  PRIMARY KEY (id, session, orderid)
);

CREATE TABLE Combo (
  id int,
  food_id int,
  name varchar,
  description text,
  price int,
  imageurl text,
  PRIMARY KEY (id, food_id),
  FOREIGN KEY (food_id) REFERENCES Food(id)
);
