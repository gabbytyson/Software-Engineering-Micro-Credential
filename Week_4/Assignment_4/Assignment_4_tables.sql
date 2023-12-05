CREATE TABLE IF NOT EXISTS  movies (
	   movie_id SERIAL PRIMARY KEY,
	   movie_name varchar(100),
	   movie_length varchar(100),
	   movie_lang varchar(100),
	   release_date varchar(100),
	   age_certificate varchar(100),
	   director_id varchar(100)
);
CREATE TABLE IF NOT EXISTS movies_actors  (
   movies_actors_id SERIAL PRIMARY KEY,
   actor_id varchar(100),
   movie_id varchar(100)
);
CREATE TABLE IF NOT EXISTS movie_revenues (
   revenue_id SERIAL PRIMARY KEY,
   movie_id varchar(100) ,
   domestic_takings varchar(100) ,
   international_takings varchar(100)
);
CREATE TABLE IF NOT EXISTS actors  (
	actor_id SERIAL PRIMARY KEY,
   first_name varchar(100),
   last_name varchar(100) ,
   gender varchar(100) ,
   date_of_birth varchar(100)
);
CREATE TABLE IF NOT EXISTS directors   (
	directors_id SERIAL PRIMARY KEY,
   first_name varchar(100) ,
   last_name varchar(100) ,
   date_of_birth varchar(100) ,
   nationality varchar(100)
);
CREATE TABLE IF NOT EXISTS actors  (
	actor_id SERIAL PRIMARY KEY,
   first_name varchar(100),
   last_name varchar(100) ,
   gender varchar(100) ,
   date_of_birth varchar(100)
);

create table if not exists directors_audit (
	directors_audit_id SERIAL PRIMARY KEY, 
	directors_id int, 
	last_name varchar(100) , 
	first_name varchar(100) ,
	time_of_change timestamp(6)
); 
