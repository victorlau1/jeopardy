create database questions;
use questions;

create table questions(
  id int not null auto_increment,
  category varchar(255),
  price varchar(100),
  image varchar(500),
  question varchar(500),
  answer varchar(500),
  primary key (id)
);
