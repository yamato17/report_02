create table GameName (id int auto_increment not null primary key, game_name varchar(100) , number_id int);
create table Fighter (id int auto_increment not null primary key, fighter_number varchar(100), fighter_name varchar(100) );
create table buy (id int auto_increment not null primary key, number varchar(100));
create table jo (fighter int auto_increment not null primary key, series varchar(100), work varchar(100));
create table ga (id int auto_increment not null primary key, series varchar(100));
create table wo (id int auto_increment not null primary key, exhibit varchar(100));

load data local infile 'GameName.csv' into table GameName fields terminated by ',' enclosed by '"';
load data local infile 'Fighter.csv' into table Fighter fields terminated by ',' enclosed by '"';
load data local infile 'buy.csv' into table buy fields terminated by ',' enclosed by '"';
load data local infile 'jo.csv' into table buy fields terminated by ',' enclosed by '"';
load data local infile 'ga.csv' into table buy fields terminated by ',' enclosed by '"';
load data local infile 'wo.csv' into table buy fields terminated by ',' enclosed by '"';