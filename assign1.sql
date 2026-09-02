drop database if exists assign1;
drop user if exists 'csce41333user'@'localhost';

create database assign1;
use assign1;
create user 'csce41333user'@'localhost' identified by 'csce41333pass';
grant all privileges on assign1.* to 'csce41333user'@'localhost';

create table users(
   userID int AUTO_INCREMENT,
   username varchar(30) not null, index(username),
   lastname varchar(50),
   firstname varchar(30),
   passwd varchar(30),
   email varchar(255),
   urole varchar(30),
   lastModified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   primary key(userID)
)engine=innodb;

insert into users(username,lastname,firstname,passwd,email,urole)
   values('jsmith','Smith','Joe','buddy','jsmith@gmail.com','admin');

insert into users(username,lastname,firstname,passwd,email,urole)
   values('bwilliams','Williams','Brian','pass123','bwilliams@gmail.com','user');

insert into users(username,lastname,firstname,passwd,email,urole)
   values('mjones','Jones','Mike','pass1234','mjones@gmail.com','user');

insert into users(username,lastname,firstname,passwd,email,urole)
   values('mjohnson','Johnson','Monica','password','mjohnson@gmail.com','user');