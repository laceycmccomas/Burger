create database burgers_db;

use burgers_db;

create table burgers (

    id integer auto_increment not null,
    burger_name varchar (100) not null,
    devoured boolean,
    primary key (id)
);