SELECT COUNT(*) FROM movies 
union all
SELECT COUNT(*) FROM movie_revenues 
union all
SELECT COUNT(*) FROM directors 
union all 
SELECT COUNT(*) FROM actors 
union all 
SELECT COUNT(*) FROM movies_actors ;


SELECT FIRST_NAME, LAST_NAME FROM directors 
order by last_Name ;

SELECT FIRST_NAME, LAST_NAME FROM actors 
order by last_Name ;

SELECT FIRST_NAME, LAST_NAME FROM directors 
INTERSECT 
SELECT FIRST_NAME, LAST_NAME FROM actors ;

SELECT d.FIRST_NAME, d.LAST_NAME FROM directors d  
JOIN ACTORS a 
ON d.first_Name=a.first_name and d.last_name=a.last_Name ;

select m.movie_name, d.first_name, d.last_name from public.movies as m, public.directors as d

select *
from movies

select *
from directors

