--Part A-1 Write a SQL query that can return all movie names, directors, all actors starred in each movie, and 


select m.movie_name, d.first_name, d.last_name, a.first_name , a.last_name
from public.movies as m

join public.directors as d 
	on d.directors_id = CAST(m.director_id AS int)
	
join public.movies_actors as ma 
	on CAST (ma.movie_id as int) = m.movie_id
	
join public.actors as a 
	on a.actor_id = CAST (ma.actor_id as int)

	
	
--Part A-2 How many  different actors starred in the same movie (under a new  column that has an aggregated function applied)

select m.movie_name, d.first_name, d.last_name,count(a.actor_id)
from public.movies as m

join public.directors as d 
	on d.directors_id = CAST(m.director_id AS int)
	
join public.movies_actors as ma 
	on CAST (ma.movie_id as int) = m.movie_id
	
join public.actors as a 
	on a.actor_id = CAST (ma.actor_id as int) 

group by (m.movie_name, d.first_name, d.last_name)
having count (a.actor_id)>0;


