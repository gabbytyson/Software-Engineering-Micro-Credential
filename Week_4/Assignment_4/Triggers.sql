--Part B-1: Create a trigger and function for tracking any updates made  to director’s last name in directors’ table. 
--	So if there is an  change made to director’s last name, then original last  name, date time of the change and director id would be 
--	appended to newly created audit table called director_audit. 

--drop function ft_director_audit_name_change()
create function ft_director_audit_name_change()
returns trigger
language 'plpgsql'
as $$
declare
begin
	insert into public.directors_audit (directors_id, last_name, first_name, time_of_change)
	values (OLD.directors_id, OLD.last_name, OLD.first_name, CURRENT_TIMESTAMP);
	--select (OLD.directors_id, OLD.last_name, OLD.first_name, CURRENT_TIMESTAMP
	--from public.directors
	return NEW;
end;
$$;

--drop trigger trg_director_audit_name_change on directors
create trigger trg_director_audit_name_change 
before delete or update 
on public.directors
FOR EACH ROW
EXECUTE PROCEDURE ft_director_audit_name_change();


--Part B-2: Update every director’s last name to a random value. Then  check if original last name information along with director_id  
--	and update data time info are all appended to table  director_audit. If yes, that means the trigger runs successfully.

UPDATE directors
SET last_name = random();

Select * from directors_audit


--Part C: Write a query to change all directors’ last names back to the  correct last name by referencing the last name sitting in 
--	director_audit table (same as in class practice question)

UPDATE public.directors  
SET last_name = da.last_name 
from public.directors_audit as da 
where directors.directors_id = da.directors_id

Select * from directors

Select * from directors_audit




